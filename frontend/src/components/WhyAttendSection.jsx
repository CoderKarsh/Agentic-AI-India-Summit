import { Card, CardContent } from "./ui/Card";
import { EventNumbers } from "./EventNumbers";
import { WhyAttendCards } from "./WhyAttendCards";
import InsightsDialogueConnection from "./InsightsDialogueConnection";

const themesData = [
  {
    number: "1",
    title: "What Comes After GenAI: Next-Generation Agentic AI Architectures",
  },
  {
    number: "2",
    title: "Scalable, Safe and Governable Agentic AI",
  },
  {
    number: "3",
    title: "Policy, Regulation, and Enterprise Technology Alignment",
  },
  {
    number: "4",
    title: "From Models to Enterprise-Wide Autonomous Systems",
  },
  {
    number: "5",
    title: "Agentic AI for Measurable Industrial and Business Impact",
  },
  {
    number: "6",
    title: "Build, Validate, and Scale Agentic AI Solutions (Startups)",
  },
  {
    number: "7",
    title: "Preparing Organizations and the Agentic Workforce",
  },
  {
    number: "8",
    title: "Peer-to-Peer Exchange Among Builders and Decision Makers",
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
      <InsightsDialogueConnection />
      <EventNumbers />

      {/* THEMES */}
      <motion.div
        className="flex flex-col items-start gap-6 w-full px-8  max-w-316 mx-auto py-8"
        variants={text}
      >
        <h3 className="self-stretch text-5xl font-normal text-[#111111] leading-8 ff-inter tracking-[-0.72px]">
          Themes
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
                    className="absolute top-[29px] left-[86px] right-4 ff-interfont-semibold text-white text-xl tracking-[-0.80px] leading-7"
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
    </motion.section>
  );
};
