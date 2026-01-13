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

      <div className="relative max-w-316 mx-auto px-4">
        <h2 className="mb-8 font-samarkan font-normal text-5xl tracking-[-3.36px] leading-[48px]">
          <span className="text-white tracking-[-1.61px]">s</span>
          <span className="ff-inria text-white tracking-[-1.61px]">
            peakers
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-12">
          {speakersData.map((speaker, index) => (
            <Card
              key={index}
              className="group bg-transparent border-none shadow-none"
              style={{ "--animation-delay": `${(index + 1) * 100}ms` }}
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                    alt={speaker.name}
                    src={speaker.image}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="ff-inter font-normal text-white text-xl md:text-2xl tracking-[-1.20px] leading-6">
                    {speaker.name}
                  </h3>
                  <p className="ff-inter font-normal text-white text-sm md:text-base tracking-[-0.80px] leading-[22.4px]">
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
