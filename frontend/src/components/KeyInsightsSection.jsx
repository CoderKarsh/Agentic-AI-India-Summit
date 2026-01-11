export const KeyInsightsSection = ({ className = "", ...props }) => {
  const pillars = [
    {
      icon: "https://c.animaapp.com/mk8nxs37jXzmJf/img/openailogo.svg",
      alt: "Open ai logo",
      title: "AI Policy and Governance",
      titleClasses: "top-[43px]",
    },
    {
      icon: "https://c.animaapp.com/mk8nxs37jXzmJf/img/cpu.svg",
      alt: "Cpu",
      title: "Agentic AI Platforms and Systems",
      titleClasses: "top-[30px]",
    },
    {
      icon: "https://c.animaapp.com/mk8nxs37jXzmJf/img/robot.svg",
      alt: "Robot",
      title: "Enterprise and Industrial AI Deployment",
      titleClasses: "top-[30px]",
    },
    {
      icon: "https://c.animaapp.com/mk8nxs37jXzmJf/img/headcircuit.svg",
      alt: "Head circuit",
      title: "Funding Scaling & Commercialization",
      titleClasses: "top-[38px]",
    },
    {
      icon: "https://c.animaapp.com/mk8nxs37jXzmJf/img/circuitry.svg",
      alt: "Circuitry",
      title: "Future Workforce for Autonomous Systems",
      titleClasses: "top-[23px]",
    },
  ];

  return (
    <section className={`flex flex-col w-full max-w-300 mx-auto items-start gap-6 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ${className}`} {...props}>
      <h2 className="relative self-stretch font-samarkan font-normal text-[#111111] text-5xl tracking-[-3.36px] leading-[48px]">
        <span className="tracking-[-1.61px]">P</span>
        <span className="ff-inria tracking-[-1.61px]">illars </span>
        <span className="tracking-[-1.61px]">o</span>
        <span className="ff-inria tracking-[-1.61px]">f&nbsp;&nbsp;</span>
        <span className="tracking-[-1.61px]">t</span>
        <span className="ff-inria tracking-[-1.61px]">he </span>
        <span className="tracking-[-1.61px]">S</span>
        <span className="ff-inria tracking-[-1.61px]">ummit</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-[7px] relative self-stretch w-full">
        {/* <div className="relative w-[73.69px] h-[305px] bg-[linear-gradient(180deg,rgba(232,139,88,1)_0%,rgba(215,65,99,1)_48%,rgba(225,57,62,1)_100%)]" /> */}

        {pillars.map((pillar, index) => (
          <div key={index} className="flex items-center gap-[7px]">
            <div className="relative w-[137px] h-[135px]">
              <img
                className="absolute top-0 left-0 w-[135px] h-[135px]"
                alt={pillar.alt}
                src={pillar.icon}
              />
              <div
                className={`absolute ${pillar.titleClasses} left-0 w-[135px] text-black text-lg text-center tracking-[-1.26px] leading-[25.2px] ff-inter font-normal`}
              >
                {pillar.title}
              </div>
            </div>

            <div className="relative w-[73.69px] h-45 lg:h-76.25 bg-[linear-gradient(180deg,rgba(232,139,88,1)_0%,rgba(215,65,99,1)_48%,rgba(225,57,62,1)_100%)]" />
          </div>
        ))}
      </div>
    </section>
  );
};
