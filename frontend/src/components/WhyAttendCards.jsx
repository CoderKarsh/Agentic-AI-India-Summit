import cardTextArea from "../assets/card-text-area.svg";
import vector from "../assets/vector.svg";
import vector2 from "../assets/vector2.svg";
import vector3 from "../assets/vector3.svg";
import vector4 from "../assets/vector4.svg";
import { motion } from "framer-motion";

export const WhyAttendCards = ({ className = "", ...props }) => {
  const cardsData = [
    {
      id: 1,
      backgroundImage: cardTextArea,
      iconBackground: "bg-[#e1393e]",
      iconImage: vector,
      text: "Direct insights from industry leaders",
    },
    {
      id: 2,
      backgroundImage: cardTextArea,
      iconBackground: "bg-[#e88b58]",
      iconImage: vector2,
      text: "Visibility into high-growth startup opportunities",
    },
    {
      id: 3,
      backgroundImage: cardTextArea,
      iconBackground: "bg-[#e35877]",
      iconImage: vector3,
      text: "Understanding of how MSMEs scale Agentic AI startups",
    },
    {
      id: 4,
      backgroundImage: cardTextArea,
      iconBackground: "bg-[#e1393e]",
      iconImage: vector4,
      text: "Real-world execution and adoption journeys",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`flex px-8 flex-col lg:flex-row items-stretch gap-4 relative max-w-125 lg:max-w-330 mx-auto ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {cardsData.map((card) => (
        <motion.div
          key={card.id}
          className="flex-1 min-w-0"
          variants={cardVariant}
        >
          <div
            className={`relative bg-[#F64D15] rounded-xl shadow p-6 pt-10 h-full`}
          >
            {/* keep decorative asset if present but hidden by default */}
            <img
              src={card.backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-0"
              aria-hidden="true"
            />

            {/* centered icon circle */}
            <div
              className={`absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 ${card.iconBackground} rounded-full flex items-center justify-center shadow-sm`}
            >
              <img src={card.iconImage} alt="icon" className="w-10 h-10" />
            </div>

            <p className=" text-center ff-inter font-medium text-[#FEFEFE] text-lg  lg:text-xl tracking-[-0.40px] leading-7 wrap-break-word">
              {card.text}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
