import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const navItems = [
  { label: "About", href: "/#about" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Committee", href: "/#committee" },
  { label: "Buy Tickets", href: "/tickets" },
  { label: "Become a sponsor", href: "/sponsor" },
];

const Header = ({ className = "", ...props }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 100; // pixels to offset so element sits 100px below top
      const rect = targetElement.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top - offset;
      window.scrollTo({ top: absoluteTop, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50  w-full bg-[#f2f2f2] ${className} transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
      {...props}
    >
      <nav className="relative flex max-w-300 items-center justify-between mx-auto py-4">
        <a href="#home">
          <img src="/Logo.svg" alt="" />
        </a>

        {/* desktop nav */}
        <div className="hidden md:inline-flex items-center justify-end gap-8">
          {navItems.map((item) => {
            // items with hashes should behave differently depending on current pathname
            if (item.href.includes("#")) {
              // if we're on the home page, intercept and smooth-scroll in-page
              if (location.pathname === "/" || location.pathname === "") {
                // special CTAs: pill styling
                if (
                  item.label === "Buy Tickets" ||
                  item.label === "Become a sponsor"
                ) {
                  return (
                    <a
                      key={item.label}
                      href={item.href.replace("/", "")}
                      onClick={(e) => {
                        handleNavClick(e, item.href.replace("/", ""));
                        setOpen(false);
                      }}
                      className="ff-inter font-semibold text-white text-base whitespace-nowrap px-4 py-2 rounded-full hover: bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)]   hover:opacity-95 cursor-pointer"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href.replace("/", "")}
                    onClick={(e) => {
                      handleNavClick(e, item.href.replace("/", ""));
                      setOpen(false);
                    }}
                    className="ff-inter font-light text-[#111111] text-base tracking-[0] leading-[normal] whitespace-nowrap transition-colors hover:text-primary-red cursor-pointer gradient-underline"
                  >
                    {item.label}
                  </a>
                );
              }

              // otherwise, navigate using router Link so ScrollToHash can run after navigation
              // CTAs should be emphasized as pills even when navigating away
              if (
                item.label === "Buy Tickets" ||
                item.label === "Become a sponsor"
              ) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="ff-inter font-semibold text-white text-base whitespace-nowrap px-4 py-2 rounded-full bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] hover:opacity-95"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="ff-inter font-light text-[#111111] text-base tracking-[0] leading-[normal] whitespace-nowrap transition-colors hover:text-primary-red cursor-pointer gradient-underline"
                >
                  {item.label}
                </Link>
              );
            }

            // no hash: normal route link
            if (
              item.label === "Buy Tickets" ||
              item.label === "Become a sponsor"
            ) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="ff-inter font-semibold text-white text-base whitespace-nowrap px-4 py-2 rounded-full bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] hover:opacity-95"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="ff-inter font-light text-[#111111] text-base tracking-[0] leading-[normal] whitespace-nowrap transition-colors hover:text-primary-red gradient-underline"
              >
                {item.label}
              </Link>
            );
          })}
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
              {navItems.map((item) => {
                // Emphasize CTAs in mobile menu as pill buttons that stand out
                if (
                  item.label === "Buy Tickets" ||
                  item.label === "Become a sponsor"
                ) {
                  if (
                    item.href.includes("#") &&
                    (location.pathname === "/" || location.pathname === "")
                  ) {
                    return (
                      <a
                        key={item.label}
                        href={item.href.replace("/", "")}
                        onClick={(e) => {
                          handleNavClick(e, item.href.replace("/", ""));
                          setOpen(false);
                        }}
                        className="ff-inter text-white px-4 py-3 rounded-full bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] text-center mb-2"
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="ff-inter text-white px-4 py-3 rounded-full bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] text-center mb-2"
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.href.includes("#")) {
                  if (location.pathname === "/" || location.pathname === "") {
                    return (
                      <a
                        key={item.label}
                        href={item.href.replace("/", "")}
                        onClick={(e) => {
                          handleNavClick(e, item.href.replace("/", ""));
                          setOpen(false);
                        }}
                        className="ff-inter text-[#111111] px-3 py-2 rounded hover:bg-gray-100 gradient-underline"
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="ff-inter text-[#111111] px-3 py-2 rounded hover:bg-gray-100 gradient-underline"
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="ff-inter text-[#111111] px-3 py-2 rounded hover:bg-gray-100 gradient-underline"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
