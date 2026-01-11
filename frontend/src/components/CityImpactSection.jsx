import { Button } from "./ui/Button";

export const CityImpactSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1200px] mx-auto items-start gap-4 px-4 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
      <header className="flex flex-wrap items-end gap-8 lg:gap-[115px] w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
        <h1 className="flex items-end justify-center flex-1 min-w-[280px] [font-family:'Samarkan-Regular',Helvetica] font-normal text-[#111111] text-4xl md:text-5xl lg:text-[64px] tracking-[-4.48px] leading-tight lg:leading-[64px]">
          <span className="tracking-[-2.87px]">A</span>
          <span className="[font-family:'Inria_Serif',Helvetica] tracking-[-2.87px]">
            gentic&nbsp;&nbsp;
          </span>
          <span className="tracking-[-2.87px]">A</span>
          <span className="[font-family:'Inria_Serif',Helvetica] tracking-[-2.87px]">
            I&nbsp;&nbsp;
          </span>
          <span className="tracking-[-2.87px]">I</span>
          <span className="[font-family:'Inria_Serif',Helvetica] tracking-[-2.87px]">
            ndia&nbsp;&nbsp;summit
          </span>
        </h1>

        <p className="flex items-end justify-center [font-family:'Inter',Helvetica] font-normal text-neutral-700 text-base md:text-lg lg:text-xl text-right tracking-[0] leading-relaxed lg:leading-[33px] whitespace-nowrap">
          <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-700 text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-[33px]">
            Defining the Future of{" "}
          </span>
          <span className="[font-family:'Inria_Serif',Helvetica] italic">
            Autonomous Intelligence
          </span>
        </p>
      </header>

      <div className="flex flex-col min-h-[400px] md:min-h-[500px] lg:h-[675px] items-end justify-end gap-2.5 px-4 py-5 w-full bg-[#d9d9d9] rounded-[20px] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
        <Button className="h-auto px-8 py-4 rounded-[120px] bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] hover:opacity-90 transition-opacity [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[-0.32px] leading-[normal]">
          Register Now
        </Button>
      </div>
    </section>
  );
};