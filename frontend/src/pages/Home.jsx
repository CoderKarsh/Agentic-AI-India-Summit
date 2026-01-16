import { WhoShouldAttendSection } from "../components/WhoShouldAttendSection";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { AgenticAIEconomy } from "../components/AgenticAIEconomy";
import { WhyAttendSection } from "../components/WhyAttendSection";
import { SpeakersSection } from "../components/SpeakersSection";
import { StrategicAdvisoryBoardSection } from "../components/StrategicAdvisoryBoardSection";
import { FutureSystemsCouncil } from "../components/FutureSystemsCouncil";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageMarquee from "../components/ImageMarquee";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] w-full relative">
      <Header className="px-8" />

      <main className="w-full space-y-15">
        <HeroSection />
        {/* <motion.div
          className=" bg-[linear-gradient(180deg,rgba(232,139,88,1)_0%,rgba(215,65,99,1)_48%,rgba(225,57,62,1)_100%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        > */}
        <AboutSection className="px-8 py-8" />
        <div className="w-full py-8">
          <Marquee className="">
            <img src="/mi1.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi2.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi3.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi4.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi5.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi6.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi7.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi8.png" alt="" className="h-50 lg:h-75 mx-4" />
            <img src="/mi9.png" alt="" className="h-50 lg:h-75 mx-4" />
          </Marquee>
        </div>
        {/* </motion.div> */}
        {/* <AgenticAIEconomy className="px-8 py-8" /> */}
        <WhyAttendSection className="px-8 py-8" />
        <WhoShouldAttendSection className="px-8 py-8" />

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
      <Footer />
    </div>
  );
};

export default Home;
