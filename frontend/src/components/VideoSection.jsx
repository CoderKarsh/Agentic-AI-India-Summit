import React from "react";

const VideoSection = ({ className = "", ...props }) => {
  return (
    <section
      className={`flex flex-col w-full max-w-300 mx-auto items-start gap-4 ${className}`}
      {...props}
    >
      <header className="flex flex-wrap lg:flex-nowrap items-end gap-8 lg:gap-28.75 w-full ">
        <h1 className="flex items-baseline justify-start flex-1 font-samarkan font-normal text-[#111111] text-4xl md:text-5xl lg:text-[64px]">
          <span className="tracking-[-2.87px]">A</span>
          <span className="ff-inria tracking-[-2.87px]">gentic&nbsp;</span>
          <span className="tracking-[-2.87px]">A</span>
          <span className="ff-inria tracking-[-2.87px]">I&nbsp;&nbsp;</span>
          <span className="tracking-[-2.87px]">I</span>
          <span className="ff-inria tracking-[-2.87px]">ndia&nbsp;summit</span>
        </h1>

        <p className="flex flex-wrap lg:flex-nowrap items-end justify-start ff-inter font-normal text-neutral-700 text-base md:text-lg lg:text-xl text-right tracking-[0] leading-relaxed lg:leading-8.25 whitespace-nowrap">
          <span className="ff-inter font-normal text-neutral-700 text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-8.25">
            Defining the Future of&nbsp;
          </span>
          <span className="ff-inria italic">Autonomous Intelligence</span>
        </p>
      </header>

      <div className="relative flex flex-col min-h-100 md:min-h-125 lg:h-168.75 items-end justify-end gap-2.5 px-4 py-5 w-full rounded-[20px] overflow-hidden bg-[#d9d9d9] aspect-[16/9]">
        {/* video element from public/IntroVideo.mp4; served at root */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/IntroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Intro video"
        />

        {/* overlay content (button) sits above the video */}
        <div className="relative z-10 w-full flex justify-end">
          <button className="h-auto px-8 py-4 rounded-[120px] bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] hover:opacity-90 transition-opacity ff-inter font-medium text-white text-base text-center tracking-[-0.32px] leading-[normal]">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export { VideoSection };
