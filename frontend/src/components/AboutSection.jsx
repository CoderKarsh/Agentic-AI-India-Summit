import { motion } from "framer-motion";

export const AboutSection = ({ className = "", ...props }) => {
  return (
    <motion.section
      id="about"
      className={`relative w-full max-w-316 mx-auto bg-[#f2f2f2] ${className}`}
      {...props}
    >
      <div className="relative z-10 max-w-230 flex flex-col gap-6">
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
          The Platform That Completes the Agentic AI Economy The Agentic AI
          India Summit is the platform where the entire Agentic AI value chain
          comes together. It unites all critical stakeholders required to build,
          strengthen, and scale the Agentic AI economy on one common platform.
          At its core is Agentic AI technology the autonomous systems, decision
          architectures, and control layers that define what AI can execute,
          govern, and scale. This technology sets the future direction of the AI
          industry and anchors the entire ecosystem. From this foundation,
          startups build next-generation Agentic AI platforms and solutions,
          taking innovation to a global level. MSMEs scale these technologies
          into the real economy, converting AI capability into adoption,
          productivity, and national impact. Future skills determine who can
          design, operate, and govern autonomous AI systems — and who leads in
          the Agentic AI era. Government policy enables execution at scale,
          providing the regulatory clarity, infrastructure, and trust required
          for autonomous AI systems to operate responsibly.
        </motion.p>
      </div>
    </motion.section>
  );
};
