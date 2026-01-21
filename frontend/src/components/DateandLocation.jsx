import containingLine from "../assets/containing-line.svg";
import divider from "../assets/divider.svg";
import { motion } from "framer-motion";

export const DateAndLocation = () => {
  const locationData = {
    venue: "Eros Hotel",
    city: "New Delhi",
  };

  const dateData = {
    day: "19 June",
    year: "2026",
  };

  // Snappy slide-in animations
  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }
    }
  };

  return (
    <section
      className="flex flex-col items-start gap-5 relative w-full"
      aria-label="Event Date and Location"
    >
      <img
        className="relative self-stretch w-full h-7.5 -mt-0.75"
        alt=""
        src={containingLine}
        role="presentation"
      />

      <div className="flex w-full mx-auto items-center gap-8 px-8 py-0 relative flex-[0_0_auto]">
        <motion.div
          className="relative flex items-end justify-center flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFromLeft}
        >
          <p className="flex flex-col gap-0 ff-inter font-medium text-[#111111] text-5xl text-center tracking-[0] -leading-4">
            <span className="ff-inter font-medium text-[#111111] text-3xl md:text-5xl tracking-[0] -leading-4">
              {locationData.venue}
            </span>
            <span className="text-2xl md:text-3xl -leading-4">
              {locationData.city}
            </span>
          </p>
        </motion.div>

        <img
          className="relative w-0.75 h-34"
          alt=""
          src={divider}
          role="presentation"
        />

        <motion.div
          className="relative flex items-end justify-center flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFromRight}
        >
          <p className="flex flex-col gap-0 ff-inter font-medium text-[#111111] text-5xl text-center tracking-[0] -leading-4">
            <span className="ff-inter font-medium text-[#111111] text-3xl md:text-5xl tracking-[0] -leading-4">
              {dateData.day}
            </span>
            <span className="text-2xl md:text-3xl -leading-4">
              {dateData.year}
            </span>
          </p>
        </motion.div>
      </div>

      <img
        className="relative self-stretch w-full h-7.5 -mt-0.75 rotate-180"
        alt=""
        src={containingLine}
        role="presentation"
      />
    </section>
  );
};
