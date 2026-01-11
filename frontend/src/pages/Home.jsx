import { AboutTheSummitSection } from "../components/AboutTheSummitSection";
import { CityImpactSection } from "../components/CityImpactSection";
import { HeroSection } from "../components/HeroSection";
import { KeyInsightsSection } from "../components/KeyInsightsSection";
import { PillarsOfTheSummitSection } from "../components/PillarsOfTheSummitSection";
import { SpeakersSection } from "../components/SpeakersSection";
import { StrategicAdvisoryBoardSection } from "../components/StrategicAdvisoryBoardSection";

import Header from "../components/Header";

const Home = () => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09b30ba1-0da3-4167-af4a-2c2b8efe817c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Home.jsx:12',message:'Home component rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
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
