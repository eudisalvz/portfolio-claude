"use client";

import { useState } from "react";

const navItems = [
  { label: "About",    href: "#about" },
  { label: "Crafting", href: "#crafting" },
  { label: "Connect",  href: "#connect" },
];

export default function Hero() {
  const [active, setActive] = useState("About");

  return (
    <div className="flex flex-col gap-2">
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-[#222] flex items-center justify-center flex-shrink-0">
          <span className="text-[#9E9E9E] text-[12px] font-medium">EA</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[14px] font-medium leading-5">
            Eudis Alvarez
          </span>
          <span className="text-[#9E9E9E] text-[12px] leading-5">
            UI/UX Designer, Venezuela
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-[30px] h-5">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`text-[12px] leading-5 underline underline-offset-2 transition-colors duration-150 ${
              active === item.label ? "text-white" : "text-[#9E9E9E]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
