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
          className="ff-inter font-normal text-[#111111] text-5xl leading-[48px] tracking-[0"
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
            The Agentic AI India Summit is a one-stop platform to understand the
            future of Agentic AI technologies and how they will shape the next
            phase of the AI-driven economy. <br />
            At its core, the summit focuses on Agentic AI
            technologies—autonomous agents, decision-driven systems, and
            multi-agent architectures—explaining how these systems will evolve,
            operate, and scale in real-world environments. It highlights what
            Agentic AI holds for startups, how new products and business models
            are emerging, and how innovation can scale from startups to MSMEs
            and enterprises. The summit also brings forward the government and
            policy perspective, outlining the support frameworks, incentives,
            and enablers that will drive responsible adoption, large-scale
            deployment, and workforce readiness—creating a clear view of how
            technology, innovation, scale, policy, and skills come together to
            define India’s Agentic AI future.
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
