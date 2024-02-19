import React from "react";
import HeadingMarquee from "./HeadingMarquee";

const HeroSection = () => {
  return (
    <div className="hero-bg2">
      <div className="hero-bg">
        <div className="my-container">
          <h1 className="text-3xl text-center text-white font-bold">
            Here Your Mobile Firmware and Software Solution
          </h1>
          <p className="text-center text-blue-100 mt-3 italic">Opening Offer! 15% OFF if buy Pack</p>
          <label className="input input-bordered flex items-center gap-2 md:w-2/4 w-2/3 mx-auto mt-4">
            <input type="text" className="grow" placeholder="Search Softwares" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* marquee */}
          <HeadingMarquee />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
