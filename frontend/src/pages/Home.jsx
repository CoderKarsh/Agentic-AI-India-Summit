import { AboutTheSummitSection } from "../components/AboutTheSummitSection";
import { CityImpactSection } from "../components/CityImpactSection";
import { HeroSection } from "../components/HeroSection";
import { KeyInsightsSection } from "../components/KeyInsightsSection";
import { PillarsOfTheSummitSection } from "../components/PillarsOfTheSummitSection";
import { SpeakersSection } from "../components/SpeakersSection";
import { StrategicAdvisoryBoardSection } from "../components/StrategicAdvisoryBoardSection";

import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] w-full relative">
      <Header />

      <main className="w-full space-y-30">
        <HeroSection />

        {/* <div id="home">
          <CityImpactSection />
        </div> */}

        <KeyInsightsSection />
        <PillarsOfTheSummitSection />
        <AboutTheSummitSection />
        <div id="speakers">
          <SpeakersSection />
        </div>
        <div id="committee">
          <StrategicAdvisoryBoardSection />
        </div>
      </main>
    </div>
  );
};

export default Home;
