import { motion } from "framer-motion";
// import infographic from "/Infographic.svg";
// import infographicMW from "/InfographicMW.svg";
// import infographicMP from "/InfographicMP.svg";
// import infographicMO from "/InfographicMO.svg";
// import infographicMR from "/InfographicMR.svg";

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
              <span className="font-samarkan">{first}</span>
              <span className="ff-inria">{rest}</span>
            </span>
          );
        })}
      </h2>
      <div className="gradient-background">
        <img
          src="/Infographic.svg"
          alt=""
          className="max-w-200 object-center"
        />
      </div>
    </section>
  );
};
