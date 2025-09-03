"use client";

const ScrollingText = ({ text, speed = 20 }) => {
  return (
    <div className="my-[5rem] text-[#6B7280] overflow-hidden whitespace-nowrap w-full relative text-[3rem] sm:text-[4rem] md:text-[5rem] leading-none">
      {/* First scrolling row */}
      <div>
        <div className="scroll-text">
          <span>- HTML5 - REACT - ES6 - CSS3 - GIT - JAVASCRIPT</span>
          <span>- HTML5 - REACT - ES6 - CSS3 - GIT - JAVASCRIPT</span>
          <span>- HTML5 - REACT - ES6 - CSS3 - GIT - JAVASCRIPT</span>
        </div>

        <style jsx>{`
          .scroll-text {
            display: flex;
            width: max-content;
            animation: scroll-left 80s linear infinite;
            line-height: 1;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* Second scrolling row */}
      <div>
        <div className="scroll-text" style={{ animationDuration: "60s", animationName: "scroll-right" }}>
          <span>- TAILWIND - ANTD - NEXT.JS - STYLED COMPONENTS - MATERIAL UI</span>
          <span>- TAILWIND - ANTD - NEXT.JS - STYLED COMPONENTS - MATERIAL UI</span>
        </div>

        <style jsx>{`
          .scroll-text {
            display: flex;
            width: max-content;
            animation: scroll-right 60s linear infinite;
            line-height: 1;
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        `}</style>
      </div>

      {/* Third scrolling row */}
      <div>
        <div className="scroll-text" style={{ animationDuration: "70s", animationName: "scroll-left" }}>
          <span>- CHATGPT - GEMINI - CLAUDE - PERPLEXITY - CODEWHISPERER</span>
          <span>- CHATGPT - GEMINI - CLAUDE - PERPLEXITY - CODEWHISPERER</span>
        </div>

        <style jsx>{`
          .scroll-text {
            display: flex;
            width: max-content;
            animation: scroll-left 70s linear infinite;
            line-height: 1;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* Fourth scrolling row */}
      <div>
        <div className="scroll-text" style={{ animationDuration: "80s", animationName: "scroll-right" }}>
          <span>- VSCODE - GITHUB - TERMINAL - POSTMAN - NETLIFY - VERCEL</span>
          <span>- VSCODE - GITHUB - TERMINAL - POSTMAN - NETLIFY - VERCEL</span>
        </div>

        <style jsx>{`
          .scroll-text {
            display: flex;
            width: max-content;
            animation: scroll-right 80s linear infinite;
            line-height: 1;
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ScrollingText;
