import React from "react";
import Marquee from "react-fast-marquee";

const HeadingMarquee = () => {
  return (
    <div className="my-container bg-slate-300 rounded-md px-2 py-4">
      <div className="flex gap-2 items-center pb-2">
        <Marquee>
          <h2>oppo a1k flash file free,</h2>
          <h2>samsung m11 flash file paid,</h2>
        </Marquee>
      </div>
      <div className="flex gap-2 items-center">
        <Marquee>
          <h2>oppo a1k flash file free,</h2>
          <h2>samsung m11 flash file paid,</h2>
        </Marquee>
      </div>
    </div>
  );
};

export default HeadingMarquee;
