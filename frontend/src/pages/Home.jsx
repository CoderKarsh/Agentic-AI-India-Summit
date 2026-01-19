import { WhoShouldAttendSection } from "../components/WhoShouldAttendSection";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { AboutGraphic } from "../components/AboutGraphic";
import { WhyAttendSection } from "../components/WhyAttendSection";
import { SpeakersSection } from "../components/SpeakersSection";
import { StrategicAdvisoryBoardSection } from "../components/StrategicAdvisoryBoardSection";
import { FutureSystemsCouncil } from "../components/FutureSystemsCouncil";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] w-full relative">
      <Header className="px-8" />

      <main className="w-full space-y-15">
        <HeroSection />
        <AboutSection className="px-8" />
        {/* <AboutGraphic /> */}

        {/* </motion.div> */}
        {/* <AgenticAIEconomy className="px-8 py-8" /> */}
        <WhyAttendSection className="py-8" />
        <WhoShouldAttendSection className="px-8 py-8" />
        {/* <div className="w-full py-8">
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
        </div> */}

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
