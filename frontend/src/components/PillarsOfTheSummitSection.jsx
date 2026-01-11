import { Card, CardContent } from "./ui/Card";

const themesData = [
  {
    number: "1",
    title: "What Comes After GenAI: Next-Generation Agentic AI Architectures",
  },
  {
    number: "2",
    title: "Scalable, Safe and Governable Agentic AI",
  },
  {
    number: "3",
    title: "Policy, Regulation, and Enterprise Technology Alignment",
  },
  {
    number: "4",
    title: "From Models to Enterprise-Wide Autonomous Systems",
  },
  {
    number: "5",
    title: "Agentic AI for Measurable Industrial and Business Impact",
  },
  {
    number: "6",
    title: "Build, Validate, and Scale Agentic AI Solutions (Startups)",
  },
  {
    number: "7",
    title: "Preparing Organizations and the Agentic Workforce",
  },
  {
    number: "8",
    title: "Peer-to-Peer Exchange Among Builders and Decision Makers",
  },
];

export const PillarsOfTheSummitSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1200px] mx-auto items-start gap-[58px] px-4 py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <header className="flex flex-col w-full items-start gap-6">
        <h2 className="self-stretch font-samarkan font-normal text-[#111111] text-5xl tracking-[-3.36px] leading-[48px]">
          <span className="tracking-[-1.61px]">W</span>
          <span className="ff-inria tracking-[-1.61px]">hy</span>
          <span className="tracking-[-1.61px]"> a</span>
          <span className="ff-inria tracking-[-1.61px]">ttend?</span>
        </h2>

        <p className="max-w-[687px] ff-interfont-normal text-neutral-700 text-base tracking-[0] leading-[26.4px]">
          The Agentic AI India Summit is for those wanting to learn from
          decision makers shaping Agentic AI&#39;s future. It engages leaders
          defining policy, deploying AI, and guiding the AI economy. The summit
          covers core themes, helping participants understand AI&#39;s future,
          governance, and impact.
        </p>
      </header>

      <div className="flex flex-col items-start gap-6 w-full">
        <h3 className="self-stretch font-samarkan font-normal text-[#111111] text-[32px] tracking-[-2.24px] leading-8">
          <span className="tracking-[-0.72px]">T</span>
          <span className="ff-inria tracking-[-0.72px]">hemes</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {themesData.map((theme, index) => (
            <Card
              key={index}
              className="h-[156px] bg-[#e35877] rounded-lg overflow-hidden shadow-[0px_4px_4px_#640f221a] border-0 translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${400 + index * 100}ms` }}
            >
              <CardContent className="relative w-full h-full p-0">
                <div className="flex w-full h-full items-center gap-2.5 absolute top-0 left-0">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <div key={i} className="flex-1 self-stretch bg-[#d74162]" />
                  ))}
                </div>

                <div className="absolute top-5 left-1 ff-interfont-bold text-[#ff890b] text-9xl tracking-[0] leading-[211.2px] whitespace-nowrap">
                  {theme.number}
                </div>

                <div className="absolute top-[29px] left-[86px] right-4 ff-interfont-semibold text-white text-xl tracking-[-0.80px] leading-7">
                  {theme.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
