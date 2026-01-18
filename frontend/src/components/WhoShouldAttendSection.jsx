const attendeeTypes = [
  {
    text: "Enterprise CXOs",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e35877]",
    rounded: "rounded-[140px]",
    animationDelay: "200ms",
  },
  {
    text: "Business Decision Makers",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e1393e]",
    rounded: "rounded-[140px]",
    animationDelay: "200ms",
  },
  {
    text: "Policy and Governance Leaders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e88b58]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "300ms",
  },
  {
    text: "Industry and Industrial Leaders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e1393e]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "400ms",
  },
  {
    text: "Investors and Strategy Leaders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e1393e]",
    rounded: "rounded-[140px]",
    animationDelay: "500ms",
  },
  {
    text: "Technology and Platform Builders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e35877]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "600ms",
  },
  {
    text: "Startup Founders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e88b58]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "700ms",
  },
  {
    text: "Scaleup Leaders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e1393e]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "700ms",
  },
  {
    text: "Skilling and Workforce Leaders",
    bgColor: "bg-[#f2f2f2]",
    strokeColor: "border-[#e35877]",
    rounded: "rounded-[140px]",
    animationDelay: "800ms",
  },
];

import { motion } from "framer-motion";

export const WhoShouldAttendSection = ({ className = "", ...props }) => {
  return (
    <motion.section
      className={`flex flex-col w-full max-w-316 mx-auto items-center gap-[65px] px-4 py-8 ${className}`}
      {...props}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="relative self-stretch ff-inter font-normal text-transparent text-5xl text-center tracking-[-3.36px] leading-[48px]">
        <span className="text-[#111111] tracking-[-1.61px]">W</span>
        <span className="ff-inter text-[#111111] tracking-[-1.61px]">ho</span>
        <span className="ff-inter text-[#111111] tracking-[-1.61px]"> s</span>
        <span className="ff-inter text-[#111111] tracking-[-1.61px]">
          hould{" "}
        </span>
        <span className="text-[#111111] tracking-[-1.61px]">a</span>
        <span className="ff-inter text-[#111111] tracking-[-1.61px]">
          ttend?
        </span>
      </h2>

      <motion.div
        className="relative flex justify-center flex-wrap -mr-12 w-full max-w-316 min-h-49.5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { when: "beforeChildren", staggerChildren: 0.06 },
          },
        }}
      >
        {attendeeTypes.map((attendee, index) => (
          <motion.div
            key={index}
            className={`z-${index + 100} px-10 py-5  ${
              attendee.bgColor
            } -ml-15 border-3 ${
              attendee.strokeColor
            } rounded-[140px] shadow-[inset_0px_4px_4px_#0000001a] text-[#111111] text-sm lg:text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap ff-inter font-normal`}
            variants={{
              hidden: { x: -300 },
              show: { x: 0, transition: { duration: 0.45, ease: "easeOut" } },
            }}
          >
            {attendee.text}&nbsp;&nbsp;&nbsp;&nbsp;
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
