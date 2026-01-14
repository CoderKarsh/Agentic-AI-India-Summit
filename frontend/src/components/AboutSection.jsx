import { motion } from "framer-motion";

export const AboutSection = ({ className = "", ...props }) => {
  return (
    <motion.section
      id="about"
      className={`relative w-full max-w-316 mx-auto bg-[#f2f2f2] ${className}`}
      {...props}
    >
      <div className="relative z-10 max-w-[642px] flex flex-col gap-6">
        <motion.h2
          className="font-samarkan font-normal text-[#111111] text-5xl leading-[48px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span className="tracking-[0]">A</span>
          <span className="ff-inria tracking-[0]">bout </span>
          <span className="tracking-[0]">t</span>
          <span className="ff-inria tracking-[0]">he </span>
          <span className="tracking-[0]">s</span>
          <span className="ff-inria tracking-[0]">ummit</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="ff-inter font-normal text-neutral-700 text-base tracking-[0] leading-[26.4px]"
        >
          The Agentic AI India Summit shapes the future of Agentic AI as a
          driver of the AI economy. It explores the impact of AI evolving into
          autonomous agents on industries and governance. The summit aligns
          stakeholders—policy makers, technologists, and industry leaders—on
          strategies for agent-based architectures and governance.
        </motion.p>
      </div>
    </motion.section>
  );
};
