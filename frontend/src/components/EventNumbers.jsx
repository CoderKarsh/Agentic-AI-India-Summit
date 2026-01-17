import React, { useRef, useState, useEffect } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

function CountUp({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(() => {
    const digits = (String(value).match(/\d+/) || ["0"])[0];
    const suffix = String(value).replace(digits, "");
    return String(0).padStart(digits.length, "0") + suffix;
  });

  useEffect(() => {
    const digitsMatch = String(value).match(/\d+/);
    const digits = digitsMatch ? digitsMatch[0] : "0";
    const target = parseInt(digits, 10) || 0;
    const suffix = String(value).replace(digits, "");

    if (!inView) return;

    const controls = animate(mv, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        const n = Math.floor(v);
        setDisplay(String(n).padStart(digits.length, "0") + suffix);
      },
    });

    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export const EventNumbers = () => {
  const stats = [
    { id: 1, number: "40+", label: "SPEAKERS" },
    { id: 2, number: "300+", label: "ATTENDEES" },
    { id: 3, number: "08", label: "TRACKS" },
  ];

  return (
    <section className="my-8 flex flex-col w-full items-start justify-center gap-2.5 px-8 py-15 relative bg-[linear-gradient(90deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_50%,rgba(225,57,62,1)_100%)]">
      <div className="flex flex-col gap-16 lg:flex-row items-center justify-between max-w-316 mx-auto relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative flex items-end justify-center w-fit -mt-px ff-inter font-semibold italic text-white text-5xl tracking-[0] leading-12">
          Exciting
          <br />
          Numbers!
        </h2>

        {stats.map((stat) => (
          <div
            key={stat.id}
            className="relative flex items-end justify-center w-fit ff-inter font-normal text-white text-[64px] tracking-[0] leading-16"
          >
            <p className="flex flex-col items-center">
              <span className="font-medium">
                <CountUp value={stat.number} />
              </span>
              <span className="ff-inter text-2xl leading-6">{stat.label}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
