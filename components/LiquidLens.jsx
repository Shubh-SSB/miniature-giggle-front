"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function LiquidLens() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const lensRef = useRef(null);
  const baseImgRef = useRef(null);

  const mouse = useRef({ x: 0.5, y: 0.5 });
  const lensPos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const lens = lensRef.current;

    // ❗ SAFETY CHECK
    if (!section || !image || !lens) return;

    /* ---------------- MOUSE TRACKING (IMAGE ONLY) ---------------- */
    const handleMouseMove = (e) => {
      const rect = image.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    const handleMouseEnter = () => {
      lens.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      lens.style.opacity = "0";
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseenter", handleMouseEnter);
    image.addEventListener("mouseleave", handleMouseLeave);

    /* ---------------- THREE.JS ---------------- */
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(lens.clientWidth, lens.clientHeight);
    lens.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load("/images/EYE.png");
    texture.flipY = true;

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTexture: { value: texture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },

        // 🔍 lens optics
        uRadius: { value: 0.48 },     // larger lens
        uZoom: { value: 1.35 },       // magnification
        uRimStrength: { value: 0.08 } // glass thickness
      },

      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uRadius;
uniform float uZoom;
uniform float uRimStrength;
varying vec2 vUv;

/* ---------- tiny noise for glass imperfections ---------- */
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  vec2 center = uMouse;

  float dist = distance(uv, center);

  // Outside lens → transparent
  if (dist > uRadius) discard;

  // Normalized lens space
  float d = dist / uRadius;

  /* ---------------- MAGNIFICATION ---------------- */
  float zoom = mix(uZoom, 1.0, d);
  uv = center + (uv - center) / zoom;

  /* ---------------- RIM REFRACTION ---------------- */
  float rim = smoothstep(0.72, 1.0, d);
  vec2 dir = normalize(uv - center);
  uv -= dir * rim * uRimStrength;

  /* ---------------- CHROMATIC (RIM ONLY) ---------------- */
  float chroma = rim * 0.0025;
  float r = texture2D(uTexture, uv + dir * chroma).r;
  float g = texture2D(uTexture, uv).g;
  float b = texture2D(uTexture, uv - dir * chroma).b;

  vec3 color = vec3(r, g, b);

  /* ---------------- MICRO GLASS NOISE ---------------- */
  float noise = hash(uv * 900.0) - 0.5;
  color += noise * 0.02 * rim;

  /* ---------------- RIM LIGHT (FRESNEL) ---------------- */
  float fresnel = pow(d, 4.5);
  vec3 rimLight = vec3(1.0, 0.95, 0.9) * fresnel * 0.20;
  color += rimLight;

  /* ---------------- GLASS SHADOW / THICKNESS ---------------- */
  float thickness = smoothstep(0.8, 1.0, d);
  color *= 1.0 - thickness * 0.40;

  /* ---------------- SOFT EDGE FADE ---------------- */
  float alpha = smoothstep(1.0, 0.96, d);

  gl_FragColor = vec4(color, alpha);
}


      `,
    });

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      material
    );
    scene.add(mesh);

    /* ---------------- RESIZE SYNC ---------------- */
    const resizeObserver = new ResizeObserver(() => {
      renderer.setSize(
        lens.clientWidth,
        lens.clientHeight,
        false
      );
    });

    resizeObserver.observe(lens);


    /* ---------------- ANIMATION LOOP ---------------- */
    let rafId;
    const animate = () => {
      lensPos.current.x += (mouse.current.x - lensPos.current.x) * 0.12;
      lensPos.current.y += (mouse.current.y - lensPos.current.y) * 0.12;

      lens.style.left = `${lensPos.current.x * 100}%`;
      lens.style.top = `${(1 - lensPos.current.y) * 100}%`;
      lens.style.transform = "translate(-50%, -50%)";

      material.uniforms.uMouse.value.set(
        lensPos.current.x,
        lensPos.current.y
      );

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);

    };
    animate();

    /* ---------------- CLEANUP (NULL-SAFE) ---------------- */
    return () => {
      cancelAnimationFrame(rafId);

      if (image) {
        image.removeEventListener("mousemove", handleMouseMove);
        image.removeEventListener("mouseenter", handleMouseEnter);
        image.removeEventListener("mouseleave", handleMouseLeave);
      }

      resizeObserver.disconnect();

      if (lens && renderer.domElement.parentNode === lens) {
        lens.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-fit rounded-full h-[500px] overflow-hidden  flex items-center justify-center bg-black"
    >
      <div ref={imageRef} className="relative inline-block">
        <img
          ref={baseImgRef}
          src="/images/EYE.png"
          className="w-[500px] select-none"
          alt="Eye"
        />


        {/* Lens */}
        <div
          ref={lensRef}
          className="
            absolute w-[280px] h-[280px] rounded-full shadow-cyan-950 overflow-hidden
            pointer-events-none opacity-0
            bg-transparent
          "
        />
      </div>
    </section>
  );
}
