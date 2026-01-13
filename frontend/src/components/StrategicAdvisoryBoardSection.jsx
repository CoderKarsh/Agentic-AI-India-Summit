import { Card, CardContent } from "./ui/Card";

const advisoryMembers = [
  {
    name: "Sh.\n Vinamra Mishra",
    title: "Joint Secretary",
    organization: "Ministry of MSME, GOI",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
  },
  {
    name: "Rakesh K. Rai",
    title: "ADC & Joint Secretary",
    organization: "Ministry of MSME, GOI",
  },
  {
    name: "Ananthanarayana Shanmugam",
    title: "Senior VP & CFO",
    organization: "Invest India",
  },

  {
    name: "Pankaj Rai",
    title: "Group Chief Data & Analytics Officer",
    organization: "Aditya Birla Group",
  },
  {
    name: "Aman Gulati",
    title: "Deputy Director",
    organization: "CoE Industry 4.0",
  },
  {
    name: "Srinivas Dwarakanath",
    title: "Director General",
    organization: "Aerospace India Association",
  },
];

export const StrategicAdvisoryBoardSection = ({ className = "", ...props }) => {
  return (
    <section
      className={`flex flex-col w-full max-w-[1203px] mx-auto items-start gap-8 px-4 py-12 relative ${className}`}
      {...props}
    >
      <header className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <h2 className="relative w-full max-w-[515px] mt-[-1.00px] font-samarkan font-normal text-[#111111] text-5xl tracking-[-3.36px] leading-[48px]">
          <span className="tracking-[-1.61px]">S</span>
          <span className="ff-inria tracking-[-1.61px]">trategic</span>
          <span className="tracking-[-1.61px]"> A</span>
          <span className="ff-inria tracking-[-1.61px]">dvisory</span>
          <span className="tracking-[-1.61px]"> C</span>
          <span className="ff-inria tracking-[-1.61px]">ouncil</span>
        </h2>

        <p className="relative w-full max-w-[376px] ff-inter font-normal text-[#3d3d3d] text-base tracking-[0] leading-[26.4px]">
          Guiding national alignment, ecosystem direction, and long-term vision
          for Agentic AI in India.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 relative w-full flex-[0_0_auto]">
        <div className="grid grid-cols-2 w-full max-w-[481px] gap-x-8 gap-y-12 relative">
          {advisoryMembers.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col w-full h-full max-w-[214px] border-0 shadow-none bg-transparent"
            >
              <CardContent className="flex w-full h-full flex-col gap-4  p-0 ">
                <h3 className=" text-[#111111] relative mt-[-1.00px] ff-inter font-normal text-2xl tracking-[-1.20px] leading-6">
                  {member.name}
                </h3>

                <div className="text-[#111111] relative ff-inter font-normal text-base tracking-[-0.80px] leading-[22.4px]">
                  {member.title}
                  <br />
                  {member.organization}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <img
          className="relative w-full lg:max-w-[688px] h-auto"
          alt="Strategic Advisory Council Illustration"
          src="https://c.animaapp.com/mk8nxs37jXzmJf/img/frame-73.svg"
        />
      </div>
    </section>
  );
};
