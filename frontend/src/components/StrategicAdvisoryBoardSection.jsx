import { Card, CardContent } from "./ui/Card";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Panneerselvam from "../assets/speakerPhotos/Panneerselvam.svg";
import vinamramishra from "../assets/speakerPhotos/vinamra mishra.svg";
import rakeshrai from "../assets/speakerPhotos/Rakesh Rai.svg";
import anantshanmugam from "../assets/speakerPhotos/anant shanmugam.png";
import pankajrai from "../assets/speakerPhotos/pankaj rai.svg";
import amangulati from "../assets/speakerPhotos/aman gulati.svg";

const advisoryMembers = [
  {
    name: "Sh.\n Vinamra Mishra",
    title: "Joint Secretary",
    organization: "Ministry of MSME, GOI",
    image: vinamramishra,
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    image: Panneerselvam,
  },
  {
    name: "Rakesh K. Rai",
    title: "ADC & Joint Secretary",
    organization: "Ministry of MSME, GOI",
    image: rakeshrai,
  },
  {
    name: "Ananthanarayana Shanmugam",
    title: "Senior VP & CFO",
    organization: "Invest India",
    image: anantshanmugam,
  },

  {
    name: "Pankaj Rai",
    title: "Group Chief Data & Analytics Officer",
    organization: "Aditya Birla Group",
    image: pankajrai,
  },
  {
    name: "Aman Gulati",
    title: "Deputy Director",
    organization: "CoE Industry 4.0",
    image: amangulati,
  },
];

export const StrategicAdvisoryBoardSection = ({ className = "", ...props }) => {
  const gridContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const reveal = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.42, ease: "easeOut" } },
  };

  const leftRef = useRef(null);
  const collageRef = useRef(null);

  useEffect(() => {
    const syncHeights = () => {
      if (typeof window === "undefined") return;
      if (!leftRef.current || !collageRef.current) return;
      // only enforce at large screens (lg ~= 1024px)
      if (window.innerWidth < 1024) {
        collageRef.current.style.height = "";
        collageRef.current.style.minHeight = "280px";
        return;
      }
      const leftHeight = Math.ceil(
        leftRef.current.getBoundingClientRect().height
      );
      // set explicit height to match exactly
      collageRef.current.style.minHeight = "";
      collageRef.current.style.height = `${Math.max(leftHeight, 280)}px`;
    };

    // initial sync and delayed sync (fonts/images/animations may change layout)
    syncHeights();
    const t = setTimeout(syncHeights, 120);

    // observe left column size changes
    let ro = null;
    if (typeof ResizeObserver !== "undefined" && leftRef.current) {
      ro = new ResizeObserver(() => syncHeights());
      ro.observe(leftRef.current);
    }

    // also re-sync when the collage image loads (in case it affects layout)
    const imgEl = collageRef.current?.querySelector("img");
    const onImgLoad = () => syncHeights();
    if (imgEl) imgEl.addEventListener("load", onImgLoad);

    window.addEventListener("resize", syncHeights);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", syncHeights);
      if (ro) ro.disconnect();
      if (imgEl) imgEl.removeEventListener("load", onImgLoad);
    };
  }, []);

  return (
    <motion.section
      className={`flex flex-col w-full max-w-[1203px] mx-auto items-start gap-8 px-4 py-12 relative ${className}`}
      {...props}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <header className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <h2 className="relative w-full max-w-[515px] mt-[-1.00px] font-samarkan font-normal text-[#111111] text-5xl tracking-[-3.36px] leading-[48px]">
          <span className="ff-inria tracking-[-1.61px]">strategic</span>
          <span className="tracking-[-1.61px]"> A</span>
          <span className="ff-inria tracking-[-1.61px]">dvisory</span>
          <span className="tracking-[-1.61px]"> C</span>
          <span className="ff-inria tracking-[-1.61px]">ouncil</span>
        </h2>

        <p className="relative w-full max-w-[376px] ff-inter font-normal text-[#3d3d3d] text-base tracking-[0] leading-[26.4px]">
          Guiding national alignment, ecosystem direction, and long-term vision
          for Agentic AI in India.
        </p>
      </header>

      <div className="flex flex-col gap-8 relative w-full flex-[0_0_auto] lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-8">
        <motion.div
          ref={leftRef}
          className="grid grid-cols-2 w-full max-w-[481px] gap-x-4 md:gap-x-8 gap-y-12 relative"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {advisoryMembers.map((member, index) => (
            <motion.div key={index} variants={cardItem}>
              <Card className="flex flex-col w-full h-full max-w-[214px] border-0 shadow-none bg-transparent">
                <CardContent className="flex w-full h-full flex-col gap-2 md:gap-4   p-0 ">
                  <motion.h3 className="text-[#111111] relative mt-[-1.00px] ff-inter font-normal text-xl md:text-2xl tracking-[-1.20px] leading-6 overflow-hidden">
                    <motion.span className="inline-block" variants={reveal}>
                      {member.name}
                    </motion.span>
                  </motion.h3>

                  <motion.div className="text-[#111111] relative ff-inter font-normal text-sm md:text-base tracking-[-0.80px] leading-[22.4px] overflow-hidden">
                    <motion.span className="inline-block" variants={reveal}>
                      {member.title}
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block text-sm md:text-base "
                      variants={reveal}
                    >
                      {member.organization}
                    </motion.span>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        {/* bg-[linear-gradient(180deg,rgba(232,139,88,1)_0%,rgba(215,65,99,1)_48%,rgba(225,57,62,1)_100%)] */}
        <div
          ref={collageRef}
          className=" overflow-hidden relative w-full lg:max-w-[688px] grid grid-cols-3 auto-rows-fr items-end min-h-[280px] lg:min-h-0 lg:h-full self-stretch"
        >
          {" "}
          {advisoryMembers.map((member, index) => {
            return (
              <div
                key={index}
                className="w-full h-full bg-[linear-gradient(45deg,rgba(232,139,88,0.9)_0%,rgba(215,65,99,0.9)_48%,rgba(225,57,62,0.9)_100%)]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-contain object-bottom`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
