import { Card, CardContent } from "./ui/Card";

const speakersData = [
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331.png",
  },
  {
    name: "Pankaj Rai",
    title: "Group Chief Data and Analytics Officer",
    organization: "Aditya Birla Group",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-1.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Sh. Vinamra Mishra",
    title: "Director",
    organization: "Ministry of Micro, Small and Medium Enterprises",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-2.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-2.png",
  },
  {
    name: "Ananthanarayanan Shanmugam",
    title: "Senior Vice President",
    organization: "Invest India",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-3.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-3.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-4.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-5.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-6.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-7.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-8.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-9.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-10.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
  {
    name: "Dr. Panneerselvam Madanagopal",
    title: "CEO",
    organization: "MeitY Startup Hub, GOI",
    backgroundImage:
      "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-330-11.png",
    image: "https://c.animaapp.com/mk8nxs37jXzmJf/img/rectangle-331-11.png",
  },
];

const backgroundStripes = Array.from({ length: 100 }, (_, i) => i);

export const SpeakersSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#e1393e] py-16">
      <div className="absolute top-[-265px] left-[-417px] flex w-[2247px] h-[2290px] items-center gap-2.5 -rotate-45 pointer-events-none">
        {backgroundStripes.map((index) => (
          <div
            key={index}
            className="relative flex-1 self-stretch grow bg-[#e3e3e314]"
          />
        ))}
      </div>

      <div className="relative max-w-[1201px] mx-auto px-4">
        <h2 className="mb-8 font-samarkan font-normal text-5xl tracking-[-3.36px] leading-[48px] translate-y-[-1rem] animate-fade-in opacity-0">
          <span className="text-white tracking-[-1.61px]">s</span>
          <span className="ff-inria text-white tracking-[-1.61px]">
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
                <div className="relative w-full aspect-[379/212] bg-white overflow-hidden rounded-lg">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    alt={speaker.name}
                    src={speaker.image}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="ff-inter font-normal text-white text-2xl tracking-[-1.20px] leading-6">
                    {speaker.name}
                  </h3>
                  <p className="ff-inter font-normal text-white text-base tracking-[-0.80px] leading-[22.4px]">
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
