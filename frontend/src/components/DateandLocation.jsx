import containingLine from "../assets/containing-line.svg";
import divider from "../assets/divider.svg";

export const DateAndLocation = () => {
  const locationData = {
    venue: "Eros Hotel",
    city: "New Delhi",
  };

  const dateData = {
    day: "19 June",
    year: "2026",
  };

  return (
    <section
      className="flex flex-col items-start gap-5 relative w-full"
      aria-label="Event Date and Location"
    >
      <img
        className="relative self-stretch w-full h-[30px] mt-[-3.00px]"
        alt=""
        src={containingLine}
        role="presentation"
      />

      <div className="flex w-full mx-auto items-center gap-8 px-8 py-0 relative flex-[0_0_auto]">
        <div className="relative flex items-end justify-center flex-1">
          <p className="ff-inter font-medium text-[#111111] text-5xl text-center tracking-[0] leading-[48px]">
            <span className="ff-inter font-medium text-[#111111] text-5xl tracking-[0] leading-[48px]">
              {locationData.venue}
              <br />
            </span>
            <span className="text-[32px] leading-8">{locationData.city}</span>
          </p>
        </div>

        <img
          className="relative w-[3px] h-[136px]"
          alt=""
          src={divider}
          role="presentation"
        />

        <div className="relative flex items-end justify-center flex-1">
          <p className="ff-inter font-medium text-[#111111] text-5xl text-center tracking-[0] leading-[48px]">
            <span className="ff-inter font-medium text-[#111111] text-5xl tracking-[0] leading-[48px]">
              {dateData.day}
              <br />
            </span>
            <span className="text-[32px] leading-8">{dateData.year}</span>
          </p>
        </div>
      </div>

      <img
        className="relative self-stretch w-full h-[30px] mt-[-3.00px]"
        alt=""
        src={containingLine}
        role="presentation"
      />
    </section>
  );
};
