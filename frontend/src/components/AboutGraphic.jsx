import React from "react";
import AgenticAI from "../assets/Agentic AI.svg";
import { motion } from "framer-motion";

export const AboutGraphic = () => {
  // Using Framer Motion's whileInView + transition.delay for sequencing; no manual controls needed.

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: -24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // inner content variants for title/subtitle and watermark
  const innerContentVariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
  };

  const titleVariant = {
    hidden: { opacity: 0, x: -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const watermarkVariant = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  // No imperative effect needed — we'll use whileInView on the container to trigger
  // the card stagger, and on the image with a transition.delay for the slight pause.
  const cards = [
    {
      id: 1,
      title: "Startups",
      subtitle: "Build it",
      backgroundColor: "#e1393e",
      watermark: "Build",
      number: "1",
    },
    {
      id: 2,
      title: "MSMEs",
      subtitle: "Scale it",
      backgroundColor: "#e88b58",
      watermark: "Scale",
      number: "2",
    },
    {
      id: 3,
      title: "Governments",
      subtitle: "Enable it",
      backgroundColor: "#d74162",
      watermark: "Enable",
      number: "3",
    },
    {
      id: 4,
      title: "Skills",
      subtitle: "Decide who leads",
      backgroundColor: "#e1393e",
      watermark: "Lead",
      number: "4",
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-center w-full max-w-200 mx-auto px-4  lg:px-0 flex-row">
      <motion.div
        className="w-full max-w-200 h-full self-stretch gap-6 flex flex-col items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            /* give a sensible minimum height so cards are visible even when parent height is not set */
            className="relative self-stretch w-full min-h-30 rounded-tl-3xl rounded-br-3xl overflow-hidden"
            variants={cardVariant}
          >
            <div
              className="absolute w-full top-0 left-0 h-full"
              style={{ backgroundColor: card.backgroundColor }}
            />

            <motion.div
              className="w-36.5 absolute top-3.25 left-4.25 flex flex-col items-start"
              variants={innerContentVariant}
            >
              <motion.div
                className="relative self-stretch mt-[-0.49px] ff-inter font-semibold text-white text-[32px] tracking-[0] leading-[normal]"
                variants={titleVariant}
              >
                {card.title}
              </motion.div>

              <motion.div
                className="relative self-stretch ff-inter font-semibold text-[#ffffffcc] text-base tracking-[-0.32px] leading-[normal]"
                variants={titleVariant}
              >
                {card.subtitle}
              </motion.div>
            </motion.div>

            <div className="absolute top-1.5 right-2 ff-inter font-normal text-white text-xs tracking-[-0.24px] leading-[normal]">
              {card.number}
            </div>

            <motion.div
              className="absolute right-0 -bottom-3.5 ff-inter font-normal text-[#00000033] text-[62.2px] text-right tracking-[-3.73px] leading-[normal]"
              variants={watermarkVariant}
            >
              {card.watermark}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.img
        src={AgenticAI}
        className="h-full object-contain"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 2 }}
        alt="Agentic AI graphic"
      />
    </div>
  );
};
