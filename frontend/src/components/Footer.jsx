import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <a
    href="#home"
    className="relative flex flex-col gap-1.5 items-start justify-center font-samarkan font-normal text-2xl tracking-[-1.68px] leading-6"
  >
    <div className="flex items-baseline text-[44px]">
      <span className="text-primary-pink tracking-[-0.40px] leading-[21.8px]">
        A
      </span>
      <span className="ff-inria text-white tracking-[-0.40px] leading-[21.8px]">
        g&nbsp;
      </span>
      <span className="text-primary-orange tracking-[-0.40px] leading-[21.8px]">
        A
      </span>
      <span className="text-primary-red tracking-[-0.40px] leading-[21.8px]">
        I&nbsp;
      </span>
    </div>
    <div className="flex items-baseline">
      <span className="ff-inria text-primary-orange tracking-[-0.40px] leading-[21.8px]">
        s
      </span>
      <span className="ff-inria tracking-[-0.40px] leading-[21.8px] text-white">
        ummit
      </span>
    </div>
  </a>
);

const SocialIcon = ({ href, children, label }) => (
  <a
    // href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-4 rounded-full bg-white/20 hover:bg-[linear-gradient(45deg,rgba(232,139,88,0.9)_0%,rgba(215,65,99,0.9)_48%,rgba(225,57,62,0.9)_100%)] transition-all duration-300"
  >
    {children}
  </a>
);

const Footer = ({ className = "", ...props }) => {
  const phone = "+91 98765 43210";
  const email = "hello@agentic.ai";

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Speakers", href: "/#speakers" },
    { label: "Committee", href: "/#committee" },
    { label: "Register", href: "/register" },
    { label: "Sponsor", href: "/sponsor" },
  ];

  return (
    <footer
      className={`w-full bg-[rgb(26,26,26)] py-10 ${className}`}
      {...props}
    >
      <div className="max-w-[1203px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <Logo />
            <div className="ff-inter text-[#666666] text-sm">
              <div>
                Phone:{" "}
                <a href={`tel:${phone}`} className="underline">
                  {phone}
                </a>
              </div>
              <div>
                Email:{" "}
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="ff-samarkan text-lg text-white">Site map</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="ff-inter text-[#666666] text-sm hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <a
                // href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="ff-inter text-sm text-[#666666] hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                // href="/terms.html"
                target="_blank"
                rel="noopener noreferrer"
                className="ff-inter text-sm text-[#666666] hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <SocialIcon href="https://twitter.com/" label="X">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2c-2.5 0-4.5 2.24-4 4.62C8 6.5 4.5 4.5 1.9 2.4a4.5 4.5 0 00-.6 2.3c0 1.6.8 3 2 3.8A4.4 4.4 0 01.96 8v.06c0 2.2 1.6 4 3.7 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2.1 2.5 3.6 4.7 3.6A9 9 0 010 19.5 12.7 12.7 0 006.9 21c8.3 0 12.8-7 12.8-13v-.6A9 9 0 0023 3z"
                    fill="#fff"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com/" label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm5.2-3.5a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2z"
                    fill="#fff"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/" label="LinkedIn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.98 3.5C4.98 5 3.95 6 2.5 6S0 5 0 3.5 1 1 2.5 1 4.98 2 4.98 3.5zM0 8.98h5V24H0zM8.5 8.98h4.8v2.06h.07c.67-1.26 2.3-2.58 4.73-2.58 5.06 0 6 3.33 6 7.66V24h-5v-7.04c0-1.68 0-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24H8.5z"
                    fill="#fff"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#bdbdbd]">
          © {new Date().getFullYear()} Agentic AI India Summit. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
