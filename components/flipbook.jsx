"use client";

const FlipBook = () => {
    return (
        <div className="flex items-center justify-center p-2">
            <iframe
                style={{ width: "700px", height: "690px" }}
                src="https://online.anyflip.com/pdlov/ephx/index.html"
                seamless="seamless"
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allowFullScreen={true}
            />
        </div>
    );
};

export default FlipBook;
