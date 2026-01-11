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

export const AboutTheSummitSection = ({ className = "", ...props }) => {
  return (
    <section
      className={`flex flex-col w-full max-w-300 mx-auto items-center gap-[65px] px-4 py-8 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms] ${className}`}
      {...props}
    >
      <h2 className="relative self-stretch font-samarkan font-normal text-transparent text-5xl text-center tracking-[-3.36px] leading-[48px]">
        <span className="text-[#111111] tracking-[-1.61px]">W</span>
        <span className="ff-inria text-[#111111] tracking-[-1.61px]">ho</span>
        <span className="text-[#111111] tracking-[-1.61px]"> s</span>
        <span className="ff-inria text-[#111111] tracking-[-1.61px]">
          hould{" "}
        </span>
        <span className="text-[#111111] tracking-[-1.61px]">a</span>
        <span className="ff-inria text-[#111111] tracking-[-1.61px]">
          ttend?
        </span>
      </h2>

      <div className="relative flex flex-wrap -mr-12 w-full max-w-300 min-h-49.5">
        {attendeeTypes.map((attendee, index) => (
          <div
            key={index}
            className={` px-10 py-5  ${attendee.bgColor} -ml-12 rounded-[140px] shadow-[inset_0px_4px_4px_#0000001a] text-white text-sm lg:text-xl text-right tracking-[0] leading-[normal] whitespace-nowrap ff-inter font-normal opacity-0 animate-fade-in`}
          >
            {attendee.text}&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        ))}
      </div>
    </section>
  );
};
