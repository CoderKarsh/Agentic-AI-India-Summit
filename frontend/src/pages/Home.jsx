import { AboutTheSummitSection } from "../components/AboutTheSummitSection";
import { HeroSection } from "../components/HeroSection";
import { VideoSection } from "../components/VideoSection";
import { KeyInsightsSection } from "../components/KeyInsightsSection";
import { PillarsOfTheSummitSection } from "../components/PillarsOfTheSummitSection";
import { SpeakersSection } from "../components/SpeakersSection";
import { StrategicAdvisoryBoardSection } from "../components/StrategicAdvisoryBoardSection";
import { FutureSystemsCouncil } from "../components/FutureSystemsCouncil";
import { motion } from "framer-motion";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] w-full relative">
      <Header className="px-8" />

      <main className="w-full space-y-30">
        <VideoSection />
        <motion.div
          className=" bg-[linear-gradient(180deg,rgba(232,139,88,1)_0%,rgba(215,65,99,1)_48%,rgba(225,57,62,1)_100%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <HeroSection className="px-8 py-8" />
        </motion.div>
        <KeyInsightsSection className="px-8 py-8" />
        <PillarsOfTheSummitSection className="px-8 py-8" />
        <AboutTheSummitSection className="px-8 py-8" />

        <motion.div
          className="overflow-hidden w-full px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src="/Pattern.svg" alt="" className="w-[1400px] max-w-none" />
        </motion.div>

        <div id="speakers">
          <SpeakersSection className="" />
        </div>

        <div id="committee">
          <StrategicAdvisoryBoardSection className="px-8 py-8" />
        </div>
        <FutureSystemsCouncil className="px-8 py-8" />
      </main>
    </div>
  );
};

export default Home;
