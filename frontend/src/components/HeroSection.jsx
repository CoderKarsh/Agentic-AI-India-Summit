export const HeroSection = ({ className = "", ...props }) => {
  return (
    <section
      className={`relative w-full py-[25px] px-4 md:px-[118px] ${className}`}
      {...props}
    >
      <div className="relative z-10 max-w-[642px] flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0">
        <h2 className="font-samarkan font-normal text-[#111111] text-5xl leading-[48px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <span className="tracking-[0]">A</span>
          <span className="ff-inria tracking-[0]">bout </span>
          <span className="tracking-[0]">t</span>
          <span className="ff-inria tracking-[0]">he </span>
          <span className="tracking-[0]">s</span>
          <span className="ff-inria tracking-[0]">ummit</span>
        </h2>
        <p className="ff-inter font-normal text-neutral-700 text-base tracking-[0] leading-[26.4px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          The Agentic AI India Summit shapes the future of Agentic AI as a
          driver of the AI economy. It explores the impact of AI evolving into
          autonomous agents on industries and governance. The summit aligns
          stakeholders—policy makers, technologists, and industry leaders—on
          strategies for agent-based architectures and governance.
        </p>
      </div>

      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        alt="Container"
        src="https://c.animaapp.com/mk8nxs37jXzmJf/img/container.png"
      />
    </section>
  );
};
