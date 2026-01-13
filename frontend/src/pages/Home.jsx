import { AboutTheSummitSection } from "../components/AboutTheSummitSection";
import { CityImpactSection } from "../components/CityImpactSection";
import { HeroSection } from "../components/HeroSection";
import { VideoSection } from "../components/VideoSection";
import { KeyInsightsSection } from "../components/KeyInsightsSection";
import { PillarsOfTheSummitSection } from "../components/PillarsOfTheSummitSection";
import { SpeakersSection } from "../components/SpeakersSection";
import { StrategicAdvisoryBoardSection } from "../components/StrategicAdvisoryBoardSection";
import { FutureSystemsCouncil } from "../components/FutureSystemsCouncil";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] w-full relative">
      <Header className="px-8" />

      <main className="w-full space-y-30">
        <VideoSection className="px-8 py-8" />
        <HeroSection className="px-8 py-8" />
        <KeyInsightsSection className="px-8 py-8" />
        <PillarsOfTheSummitSection className="px-8 py-8" />
        <AboutTheSummitSection className="px-8 py-8" />

        <div className="overflow-hidden w-full px-8">
          <img src="/Pattern.svg" alt="" className="w-[1400px] max-w-none" />
        </div>

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
