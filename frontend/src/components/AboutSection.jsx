import { motion } from "framer-motion";

export const AboutSection = ({ className = "", ...props }) => {
  return (
    <motion.section
      id="about"
      className={`relative w-full max-w-316 mx-auto bg-[#f2f2f2] ${className} grid grid-cols-1 place-content-center lg:grid-cols-2 gap-8 py-4`}
      {...props}
    >
      <div className="relative z-10 flex flex-col gap-6">
        <motion.h2
          className="ff-inter font-normal text-[#111111] text-5xl leading-12 tracking-[0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          About the Summit
        </motion.h2>
        <div className="w-full place-content-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            className="ff-inter font-normal text-neutral-700 text-base tracking-[0] leading-[26.4px] w-full"
          >
            Agentic AI represents the next architectural leap in artificial
            intelligence, redefining how AI systems reason, decide, and act as
            autonomous systems. Moving beyond model-centric intelligence, it
            enables system-level autonomy through goal-driven agents that can
            reason, plan, execute actions, coordinate across multi-agent
            environments, and continuously adapt within complex, dynamic
            conditions. <br />
            The Agentic AI India Summit is a platform where core Agentic AI
            technologies are discussed to define the future direction across
            sectors. It sets clarity on how autonomous systems and agent-driven
            architectures will shape industries, from enterprises to national
            digital infrastructure. <br />
            It also defines the pathway for the next generation of startups and
            the future skills required to build, deploy, and govern Agentic AI
            systems. Government leaders outline the policy frameworks,
            incentives, and support mechanisms designed to accelerate adoption,
            enable scale, and strengthen the evolving Agentic AI ecosystem.
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            className="gradient-background inline-flex items-center justify-center"
          >
            <motion.img
              src="/Infographic.svg"
              alt="Infographic showing Technology, Startups, MSMEs, Governments"
              loading="eager"
              decoding="async"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className="object-center lg:max-w-150 max-w-full h-auto"
            />
          </motion.div>
           */}
        </div>
      </div>
      <img
        src="/p1 (12).png"
        alt="About visual"
        className="h-full w-full object-cover"
      />
    </motion.section>
  );
};
