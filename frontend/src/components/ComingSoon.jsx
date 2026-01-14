import React from "react";

export const ComingSoon = ({
  title = "Feature coming soon",
  subtitle = "This page or link is not ready yet. Stay tuned!",
  actions = [],
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center w-full min-h-[60vh] px-6 py-12 bg-[#f9f9f9] ${className}`}
    >
      <div className="max-w-[820px] w-full text-center">
        <h1 className="font-samarkan text-5xl md:text-6xl text-[#111111] tracking-[-3px] leading-tight">
          {title}
        </h1>
        <p className="mt-6 ff-inter text-base md:text-lg text-neutral-700 leading-7">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {actions &&
            actions.map((a, i) => (
              <a
                key={i}
                href={a.href || "#"}
                onClick={(e) => a.disabled && e.preventDefault()}
                className={`inline-block px-6 py-3 rounded-[120px] font-medium text-sm md:text-base transition-shadow ${
                  a.primary
                    ? "bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] text-white shadow-lg"
                    : "bg-white text-neutral-900 border border-neutral-200"
                } ${
                  a.disabled
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:opacity-95"
                }`}
              >
                {a.label}
              </a>
            ))}
        </div>

        <div className="mt-6 text-sm text-neutral-500">
          <p>
            Questions? Reach out at{" "}
            <a href="mailto:info@example.com" className="underline">
              info@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
