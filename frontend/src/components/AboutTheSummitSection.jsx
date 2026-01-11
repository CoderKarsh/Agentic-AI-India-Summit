const attendeeTypes = [
  {
    text: "Enterprise CXOs and Business Decision Makers",
    bgColor: "bg-[#e35877]",
    rounded: "rounded-[140px]",
    animationDelay: "200ms",
  },
  {
    text: "Policy and Governance Leaders",
    bgColor: "bg-[#e88b58]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "300ms",
  },
  {
    text: "Industry and Industrial Leaders",
    bgColor: "bg-[#e1393e]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "400ms",
  },
  {
    text: "Investors and Strategy Leaders",
    bgColor: "bg-[#e1393e]",
    rounded: "rounded-[140px]",
    animationDelay: "500ms",
  },
  {
    text: "Technology and Platform Builders",
    bgColor: "bg-[#e35877]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "600ms",
  },
  {
    text: "Startup Founders and Scaleup Leaders",
    bgColor: "bg-[#e88b58]",
    rounded: "rounded-[0px_140px_140px_0px]",
    animationDelay: "700ms",
  },
  {
    text: "Skilling and Workforce Leaders",
    bgColor: "bg-[#e35877]",
    rounded: "rounded-[140px]",
    animationDelay: "800ms",
  },
];

export const AboutTheSummitSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1210px] mx-auto items-center gap-[65px] px-4 py-8 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
      <h2 className="relative self-stretch [font-family:'Samarkan-Regular',Helvetica] font-normal text-transparent text-5xl text-center tracking-[-3.36px] leading-[48px]">
        <span className="text-[#111111] tracking-[-1.61px]">W</span>
        <span className="[font-family:'Inria_Serif',Helvetica] text-[#111111] tracking-[-1.61px]">
          ho
        </span>
        <span className="text-[#111111] tracking-[-1.61px]"> s</span>
        <span className="[font-family:'Inria_Serif',Helvetica] text-[#111111] tracking-[-1.61px]">
          hould{" "}
        </span>
        <span className="text-[#111111] tracking-[-1.61px]">a</span>
        <span className="[font-family:'Inria_Serif',Helvetica] text-[#111111] tracking-[-1.61px]">
          ttend?
        </span>
      </h2>

      <div className="relative w-full max-w-[1210px] min-h-[198px]">
        <div className="inline-flex items-center justify-center gap-2.5 px-10 py-5 absolute top-[67px] left-[710px] bg-[#e88b58] rounded-[0px_140px_140px_0px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:700ms]">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Startup Founders and Scaleup Leaders
          </div>
        </div>

        <div className="flex w-[386px] items-center justify-center gap-2.5 px-10 py-5 absolute top-0 left-[824px] bg-[#e1393e] rounded-[0px_140px_140px_0px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:400ms]">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Industry and Industrial Leaders
          </div>
        </div>

        <div className="flex w-[362px] items-center justify-center gap-2.5 px-10 py-5 absolute top-0 left-[492px] bg-[#e88b58] rounded-[0px_140px_140px_0px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:300ms]">
          <div className="relative w-fit ml-[-8.50px] mr-[-8.50px] text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica] font-normal">
            Policy and Governance Leaders
          </div>
        </div>

        <div className="flex w-[514px] items-center justify-center gap-2.5 px-10 py-5 absolute top-0 left-1 bg-[#e35877] rounded-[140px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:200ms]">
          <div className="relative w-fit ml-[-6.50px] mr-[-6.50px] text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Inter',Helvetica] font-normal">
            Enterprise CXOs and Business Decision Makers
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-10 py-5 absolute top-[67px] left-[340px] bg-[#e35877] rounded-[0px_140px_140px_0px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:600ms]">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Technology and Platform Builders
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-10 py-5 absolute top-[134px] left-0 bg-[#e35877] rounded-[140px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:800ms]">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Skilling and Workforce Leaders
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-2.5 px-10 py-5 absolute top-[67px] left-0.5 bg-[#e1393e] rounded-[140px] shadow-[inset_0px_4px_4px_#0000001a] opacity-0 animate-fade-in [--animation-delay:500ms]">
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap">
            Investors and Strategy Leaders
          </div>
        </div>
      </div>
    </section>
  );
};