import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaFile, FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeadingMarquee = () => {
  const [fakeFiles, getFakeFiles] = useState([]);
  useEffect(() => {
    fetch("/Files.json")
      .then((res) => res.json())
      .then((data) => getFakeFiles(data));
  }, []);
  return (
    <div className="my-container my-8 bg-slate-100 rounded-lg p-6 shadow-md shadow-gray-300">
      <div className="flex items-center gap-2 mb-3">
        <button className="flex items-center gap-2 font-semibold p-2 rounded-l-full bg-emerald-600 text-white">
          <FaFile className="text-white" /> Files
        </button>
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="border p-2 rounded-r-full bg-white"
        >
          {fakeFiles.map((data) => (
            <h2 className="text-blue-600 pr-6" key={data._id}>
              {data.category}
            </h2>
          ))}
        </Marquee>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 font-semibold p-2 rounded-l-full bg-emerald-600 text-white">
          <FaGear className="text-white" /> Tools
        </button>
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="border p-2 rounded-r-full bg-white"
        >
          {fakeFiles.map((data) => (
            <h2 className="text-blue-600 pr-6" key={data._id}>{data.description}USD</h2>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeadingMarquee;
