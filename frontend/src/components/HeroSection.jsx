import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ className = "", ...props }) => {
  const infoContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const slideLeft = {
    hidden: { x: -420, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="home"
      className={`flex flex-col w-full max-w-316 mx-auto items-start gap-4 py-8 ${className}`}
      {...props}
    >
      <div className="relative flex flex-col items-end justify-end gap-2.5 md:mx-4 py-5 w-full md:rounded-[20px] overflow-hidden aspect-video">
        {/* video element from public/IntroVideo.mp4; served at root */}
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ width: "0%" }}
          whileInView={{
            width: "100%",
            transition: { duration: 0.9, ease: "easeInOut" },
          }}
          viewport={{ once: true, amount: 0.2 }}
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
            Buy Tickets
          </button>
        </div>
      </div>
      <section className="flex flex-wrap lg:flex-nowrap items-end gap-8 px-8 lg:gap-28.75 w-full ">
        <motion.h1
          className="flex items-baseline justify-start flex-wrap font-samarkan font-normal text-[#111111] text-[64px] md:text-8xl leading-none"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            hidden: {},
            show: {
              transition: { when: "beforeChildren" },
            },
          }}
        >
          {/* heading lines animated from bottom using child variants */}
          <motion.div className="overflow-hidden">
            <p className="m-0">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.03 } },
                }}
              >
                {Array.from("Agentic ").map((ch, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block tracking-[-2.87px] ${
                      i === 0 ? "font-samarkan" : "ff-inria"
                    }`}
                    variants={{
                      hidden: { y: "110%" },
                      show: {
                        y: "0%",
                        transition: { duration: 0.35, ease: "easeOut" },
                      },
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
            </p>
          </motion.div>

          <motion.div className="overflow-hidden">
            <p className="m-0">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.03, delayChildren: 0.24 },
                  },
                }}
              >
                {Array.from("AI ").map((ch, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block tracking-[-2.87px] ${
                      i === 0 ? "font-samarkan" : "ff-inria"
                    }`}
                    variants={{
                      hidden: { y: "110%" },
                      show: {
                        y: "0%",
                        transition: { duration: 0.35, ease: "easeOut" },
                      },
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
            </p>
          </motion.div>

          <motion.div className="overflow-hidden">
            <p className="m-0">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.03, delayChildren: 0.33 },
                  },
                }}
              >
                {Array.from("India ").map((ch, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block tracking-[-2.87px] ${
                      i === 0 ? "font-samarkan" : "ff-inria"
                    }`}
                    variants={{
                      hidden: { y: "110%" },
                      show: {
                        y: "0%",
                        transition: { duration: 0.35, ease: "easeOut" },
                      },
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
            </p>
          </motion.div>

          <motion.div className="overflow-hidden">
            <p className="m-0">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.03, delayChildren: 0.48 },
                  },
                }}
              >
                {Array.from("summit ").map((ch, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block tracking-[-2.87px] ff-inria`}
                    variants={{
                      hidden: { y: "110%" },
                      show: {
                        y: "0%",
                        transition: { duration: 0.35, ease: "easeOut" },
                      },
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
            </p>
          </motion.div>
        </motion.h1>
      </section>
      <motion.div
        className="overflow-hidden flex w-full px-8 flex-col gap-1 lg:flex-row lg:justify-between"
        variants={infoContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className="flex flex-wrap xl:flex-nowrap items-end justify-start ff-inter font-normal text-neutral-700 text-base md:text-lg lg:text- tracking-[0] leading-relaxed lg:leading-8.25 whitespace-nowrap m-0"
          variants={slideLeft}
        >
          <span className="ff-inter font-normal text-neutral-700 text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-8.25">
            Defining the Future of&nbsp;
          </span>
          <span className="ff-inria italic">Autonomous Intelligence</span>
        </motion.p>

        <motion.div className="ff-inter text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-8.25 flex flex-col lg:flex-row lg:w-[50%] lg:justify-between gap-0.5">
          <motion.span variants={slideLeft} className="block">
            Eros Hotel, <span className="ff-inria italic">New Delhi</span>
          </motion.span>
          <motion.span variants={slideLeft} className="block">
            19 June, <span className="ff-inria italic">2026</span>
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { HeroSection };
