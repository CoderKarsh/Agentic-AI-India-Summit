import { Card, CardContent } from "./ui/Card";
import { speakersData } from "../data/speakersData";

export const SpeakersSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#e1393e] py-16">
      {/* Replace many DOM stripe elements with a single gradient layer for performance */}
      <div
        className="absolute inset-0 pointer-events-none speakers-stripes"
        aria-hidden="true"
      />

      <div className="relative max-w-300 mx-auto px-4">
        <h2 className="mb-8 font-samarkan font-normal text-5xl tracking-[-3.36px] leading-[48px] translate-y-[-1rem] animate-fade-in opacity-0">
          <span className="text-white tracking-[-1.61px]">s</span>
          <span className="[font-family:'Inria_Serif',Helvetica] text-white tracking-[-1.61px]">
            peakers
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-12">
          {speakersData.map((speaker, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="relative w-full aspect-[379/212]">
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center gap-8 p-[3px]">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="relative flex-1 h-full bg-[#e1393e33]"
                        />
                      ))}
                    </div>
                  )}

                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    alt={speaker.name}
                    src={speaker.image}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[-1.20px] leading-6">
                    {speaker.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.80px] leading-[22.4px]">
                    {speaker.title}
                    <br />
                    {speaker.organization}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
