import React, { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Committee", href: "#committee" },
  { label: "Register", href: "#register" },
  { label: "Become a sponsor", href: "#sponsor" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f2f2f2]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f2f2f2]/80">
      <nav className="relative flex w-full max-w-300 items-center justify-between mx-auto py-8">
        <a href="#hero">
          <div className="relative flex flex-col items-start justify-center font-samarkan font-normal text-2xl tracking-[-1.68px] leading-6">
            {/* First line: Agentic AI */}
            <div className="flex items-baseline">
              <span className="text-primary-pink tracking-[-0.40px] leading-[21.8px]">
                A
              </span>
              <span className="ff-inria text-[#111111] tracking-[-0.40px] leading-[21.8px]">
                gentic&nbsp;
              </span>
              <span className="text-primary-orange tracking-[-0.40px] leading-[21.8px]">
                A
              </span>
              <span className="ff-inria text-[#111111] tracking-[-0.40px] leading-[21.8px]">
                I
              </span>
            </div>
            {/* Second line: India Summit */}
            <div className="flex items-baseline">
              <span className="text-primary-red tracking-[-0.40px] leading-[21.8px]">
                I
              </span>
              <span className="ff-inria text-[#111111] tracking-[-0.40px] leading-[21.8px]">
                ndia&nbsp;
              </span>
              <span className="ff-inria text-primary-orange tracking-[-0.40px] leading-[21.8px]">
                s
              </span>
              <span className="ff-inria tracking-[-0.40px] leading-[21.8px]">
                ummit
              </span>
            </div>
          </div>
        </a>

        {/* desktop nav */}
        <div className="hidden md:inline-flex items-center justify-end gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                handleNavClick(e, item.href);
                setOpen(false);
              }}
              className="ff-inter font-light text-[#111111] text-base tracking-[0] leading-[normal] whitespace-nowrap transition-colors hover:text-primary-red cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* mobile hamburger */}
        <div className="md:hidden inline-flex items-center">
          <button
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
          >
            {/* simple hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* mobile menu panel */}
        {open && (
          <div className="md:hidden absolute right-4 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50">
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setOpen(false);
                  }}
                  className="ff-inter text-[#111111] px-3 py-2 rounded hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
