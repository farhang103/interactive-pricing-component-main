import React from "react";
import bgPattern from "../assets/bg-pattern.svg";
import patternCircles from "../assets/pattern-circles.svg";

const Header = () => {
  return (
    <div className="relative flex h-1/2 w-full justify-center">
      <img
        src={bgPattern}
        alt=""
        className="absolute h-full w-full object-fill"
      />
      <img
        src={patternCircles}
        alt=""
        className="absolute top-14 h-[9.125rem] w-[9.125rem]"
      />
      <h1 className="absolute top-24 text-xl font-extrabold text-neutral-text_ctaBackground">
        Simple, traffic-based pricing
      </h1>
      <div className="absolute top-32 mt-1 flex flex-col items-center text-sm text-neutral-text">
        <p>Sign-up for our 30-day trial.</p>
        <p className="mt-2">No credit card required.</p>
      </div>
    </div>
  );
};

export default Header;
