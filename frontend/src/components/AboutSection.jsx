import { motion } from "framer-motion";
import { AboutGraphic } from "./AboutGraphic";

export const AboutSection = ({ className = "", ...props }) => {
  return (
    <motion.section
      id="about"
      className={`relative w-full max-w-316 mx-auto bg-[#f2f2f2] ${className}`}
      {...props}
    >
      <div className="relative z-10 flex flex-col gap-6">
        <motion.h2
          className="ff-inter font-normal text-[#111111] text-5xl leading-[48px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <span className="tracking-[0]">A</span>
          <span className="ff-inter tracking-[0]">bout </span>
          <span className="tracking-[0]">t</span>
          <span className="ff-inter tracking-[0]">he </span>
          <span className="ff-inter tracking-[0]">S</span>
          <span className="ff-inter tracking-[0]">ummit</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full place-content-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            className="ff-inter font-normal text-neutral-700 text-base tracking-[0] leading-[26.4px] w-full"
          >
            The Agentic AI India Summit is the platform that defines the future
            of the Agentic AI driven landscape by bringing together the complete
            Agentic AI ecosystem on one stage.
            <br />
            At its core, the summit focuses on the latest Agentic AI
            technologies, which set the direction and shape the future of the AI
            industry. These technologies explain how autonomous and
            decision-driven systems will evolve, operate, and scale across
            sectors.
            <br />
            The Startups then show the way forward, highlighting how new
            products, platforms, and business models are being built on Agentic
            AI. Startups act as the torchbearers, revealing what the next wave
            of technology and innovation will look like. <br />
            The MSME focus demonstrates how this innovation scales, educating
            businesses on how to adopt Agentic AI to grow operations, improve
            productivity, and compete in an AI-driven economy. <br />
            The skills and talent arena prepare the future workforce, outlining
            the critical skills required to build, operate, and lead in the
            emerging Agentic AI economy. <br />
            Government and policy perspectives complete the picture by
            explaining the frameworks, incentives, and support systems that
            enable responsible and large-scale adoption. <br />
            Together, the Agentic AI India Summit connects technology,
            innovation, scale, policy, and skills into one end-to-end platform,
            helping position the nation at the forefront of the global Agentic
            AI economy.
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
          <AboutGraphic />
        </div>
      </div>
    </motion.section>
  );
};
