import { Card, CardContent } from "./ui/Card";
import { EventNumbers } from "./EventNumbers";
import { WhyAttendCards } from "./WhyAttendCards";
import Marquee from "react-fast-marquee";

// import InsightsDialogueConnection from "./InsightsDialogueConnection";

const themesData = [
  {
    number: "1",
    title: "From Prompting to Performing: Building the Autonomous Enterprise",
  },
  {
    number: "2",
    title: "India’s Sovereign Agentic AI Strategy",
  },
  {
    number: "3",
    title: "From Proof-of-Concept to Production at Scale",
  },
  {
    number: "4",
    title: "The Future of Work: Managing the Human–Agent Workforce",
  },
  {
    number: "5",
    title: "Empowering India’s 603 Million MSMEs Through Agentic AI",
  },
  {
    number: "6",
    title: "Technology Deep Dive: Building Multi-Agent Enterprise Stacks",
  },
  {
    number: "7",
    title: "Security, Guardrails & Governance for Agentic AI",
  },
  {
    number: "8",
    title: "Startup Showcase & Pitch: Building the Next Wave of Agentic AI",
  },
  {
    number: "9",
    title:
      "Beyond the Browser: Agentic AI in Hardware, Edge & Physical Systems",
  },
];

import { motion } from "framer-motion";

export const WhyAttendSection = ({ className = "", ...props }) => {
  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };

  const text = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren" },
    },
  };

  // inner animations for each card
  const stripesContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.03 } },
  };

  const stripe = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const numberInner = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.45, ease: "easeOut" } },
  };

  const titleVariant = {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const headerVariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <motion.section
      className={`flex flex-col w-full  mx-auto items-start gap-4 py-8 ${className}`}
      {...props}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* THEMES */}
      <motion.div
        className="flex flex-col items-start gap-6 w-full px-8  max-w-316 mx-auto py-8"
        variants={text}
      >
        <h3 className="self-stretch text-5xl font-normal text-[#111111] leading-8 ff-inter tracking-[-1.76px]">
          Tracks
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {themesData.map((theme, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-[156px] bg-[#E1393E] rounded-lg overflow-hidden shadow-[0px_4px_4px_#640f221a] border-0">
                <CardContent className="relative w-full h-full p-0">
                  <motion.div
                    className="flex w-full h-full items-center gap-2.5 absolute top-0 left-0"
                    variants={stripesContainer}
                  >
                    {Array.from({ length: 22 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 self-stretch bg-[#d22d33]"
                        variants={stripe}
                      />
                    ))}
                  </motion.div>

                  <div className="absolute top-5 left-1 ff-inter font-medium text-[#ff890b] text-9xl tracking-[0] leading-[211.2px] whitespace-nowrap overflow-hidden">
                    <motion.div className="inline-block" variants={numberInner}>
                      {theme.number}
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute top-[29px] left-[86px] right-4 ff-inter font-semibold text-white text-xl tracking-[-0.80px] leading-7"
                    variants={titleVariant}
                  >
                    {theme.title}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className=" max-w-316 px-8 mx-auto flex flex-col lg:flex-row justify-between gap-8 w-full items-center">
        <motion.header
          className="flex flex-col w-full items-start gap-6"
          variants={headerVariant}
        >
          <motion.h2
            className="self-stretch ff-inter font-normal text-[#111111] text-5xl tracking-[-1.6px] leading-[48px]"
            variants={text}
          >
            Why Attend?
          </motion.h2>
          <motion.p
            className="max-w-[687px] ff-inter font-normal text-neutral-700 text-base tracking-[0] leading-[26.4px]"
            variants={text}
          >
            The Agentic AI India Summit is for those wanting to learn from
            decision makers shaping Agentic AI&#39;s future. It engages leaders
            defining policy, deploying AI, and guiding the AI economy. The
            summit covers core themes, helping participants understand AI&#39;s
            future, governance, and impact.
          </motion.p>
        </motion.header>
      </div>

      <WhyAttendCards className="py-20" />
      {/* <InsightsDialogueConnection /> */}
      <div className="w-full py-8">
        <Marquee>
          <img
            src="/marquee/Insights/1.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Insights/2.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Insights/3.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Insights/4.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Insights/5.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Insights/6.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Insights/7.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Dialogue/1.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Dialogue/2.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Dialogue/3.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Dialogue/4.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Connection/1.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Connection/2.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Connection/3.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Connection/4.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
          <img
            src="/marquee/Connection/5.svg"
            alt=""
            className="h-50 lg:h-75 mx-4"
          />
        </Marquee>
      </div>
      <EventNumbers />
    </motion.section>
  );
};
