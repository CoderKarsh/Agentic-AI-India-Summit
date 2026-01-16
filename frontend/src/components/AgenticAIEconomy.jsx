import { motion } from "framer-motion";

export const AgenticAIEconomy = ({ className = "", ...props }) => {
  return (
    <section
      className={`relative w-full max-w-316 mx-auto bg-[#f2f2f2] ${className} text-center flex flex-col items-center gap-10`}
      {...props}
    >
      <h2 className="font-normal text-[#111111] text-5xl leading-[48px]">
        {"The Agentic AI Economy".split(" ").map((word, wi) => {
          const first = word.charAt(0) || "";
          const rest = word.slice(1) || "";
          return (
            <span key={wi} className="inline-block mr-2">
              <span className="ff-inter">{first}</span>
              <span className="ff-inter">{rest}</span>
            </span>
          );
        })}
      </h2>
      <div className="gradient-background">
        <img src="/Infographic.svg" alt="" className="object-contain" />
      </div>
    </section>
  );
};
