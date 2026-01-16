import React from "react";
import "./globals.css";
import {
  Inter,
  Playfair_Display,
  Great_Vibes,
  Italianno,
  Raleway,
  Poppins,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});
const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const metadata = {
  title: "EyeKon AI - Protect Your Vision with AI-Powered Insights",
  description:
    "Real-time eye health monitoring with AI-driven insights and personalized recommendations.",
  generator: "Shubham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${inter.className} ${greatVibes.variable} ${italianno.variable} ${raleway.variable} ${poppins.variable} bg-black text-white antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export { playfair, greatVibes, italianno, raleway, poppins };
