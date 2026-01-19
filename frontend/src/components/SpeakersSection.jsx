import { Card, CardContent } from "./ui/Card";
import { speakersData } from "../data/speakersData";
import { motion } from "framer-motion";

export const SpeakersSection = () => {
  const container = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="relative w-full overflow-hidden bg-[#D63500] py-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
    >
      {/* Replace many DOM stripe elements with a single gradient layer for performance */}
      <div
        className="absolute inset-0 pointer-events-none speakers-stripes"
        aria-hidden="true"
      />

      <div className="relative max-w-316 mx-auto px-4">
        <h2 className="mb-8 ff-inter font-normal text-5xl tracking-[-3.36px] leading-12">
          <span className="ff-inter text-white tracking-[-1.61px]">
            Speakers
          </span>
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-x-8 lg:gap-y-12"
          variants={container}
        >
          {speakersData.map((speaker, index) => {
            const imgVariants = {
              rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
              hover: {
                scale: 1.01,
                boxShadow: "0px 30px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.35, ease: "easeOut" },
              },
            };

            return (
              <motion.div
                key={index}
                variants={item}
                className="group"
                initial="rest"
                whileHover="hover"
              >
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="p-0 flex flex-col gap-4">
                    <motion.div
                      className="relative w-full aspect-square bg-[#E88B58]  overflow-hidden"
                      variants={imgVariants}
                    >
                      <img
                        className="absolute inset-0 w-full h-full object-contain object-bottom   transition-all duration-300 shadow-none group-hover:shadow-xl"
                        alt={speaker.name}
                        src={speaker.image}
                      />
                    </motion.div>

                    <motion.div className="flex flex-col gap-2 lg:gap-4">
                      <h3 className="ff-inter font-semibold text-white text-base md:text-xl tracking-[-1.20px] leading-6">
                        {speaker.name}
                      </h3>
                      <p className="ff-inter font-normal text-white opacity-80 hover:opacity-100 text-sm md:text-base tracking-[-0.80px] leading-[22.4px]">
                        {speaker.title}
                        <br />
                        <span className=" mt-4"> {speaker.organization}</span>
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
