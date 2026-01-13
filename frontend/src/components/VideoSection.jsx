import React from "react";

const VideoSection = ({ className = "", ...props }) => {
  return (
    <section
      id="home"
      className={`flex flex-col w-full max-w-316 mx-auto items-start gap-4 ${className}`}
      {...props}
    >
      <section className="flex flex-wrap lg:flex-nowrap items-end gap-8 lg:gap-28.75 w-full ">
        <h1 className="flex items-baseline justify-start flex-wrap font-samarkan font-normal text-[#111111] text-[64px] md:text-8xl leading-[1em]">
          <p>
            <span className="tracking-[-2.87px]">A</span>
            <span className="ff-inria tracking-[-2.87px]">gentic&nbsp;</span>
          </p>
          <p>
            {" "}
            <span className="tracking-[-2.87px]">A</span>
            <span className="ff-inria tracking-[-2.87px]">I&nbsp;</span>
          </p>
          <p>
            <span className="tracking-[-2.87px]">I</span>
            <span className="ff-inria tracking-[-2.87px]">ndia&nbsp;</span>
          </p>
          <p>summit</p>
        </h1>
      </section>
      <p className="flex flex-wrap xl:flex-nowrap items-end justify-start ff-inter font-normal text-neutral-700 text-base md:text-lg lg:text-xl text-right tracking-[0] leading-relaxed lg:leading-8.25 whitespace-nowrap">
        <span className="ff-inter font-normal text-neutral-700 text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-8.25">
          Defining the Future of&nbsp;
        </span>
        <span className="ff-inria italic">Autonomous Intelligence</span>
      </p>

      <div className="relative flex flex-col items-end justify-end gap-2.5 px-4 py-5 w-full rounded-[20px] overflow-hidden bg-[#d9d9d9] aspect-video">
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
          <button className="h-auto px-4 py-2 md:px-8 md:py-4 rounded-[120px] bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] hover:opacity-90 transition-opacity ff-inter font-medium text-white text-sm md:text-base text-center tracking-[-0.32px] leading-[normal]">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export { VideoSection };
