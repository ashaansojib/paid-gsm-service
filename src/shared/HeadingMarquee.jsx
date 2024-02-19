import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const HeadingMarquee = () => {
  const [fakeFiles, getFakeFiles] = useState([]);
  useEffect(() => {
    fetch("/Files.json")
      .then((res) => res.json())
      .then((data) => getFakeFiles(data));
  }, []);
  return (
    <div className="my-container my-8 bg-[#36c574] border rounded-t-full px-12 py-6">
      <div className="flex justify-center items-center gap-2 mb-3 w-3/4 mx-auto">
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="border p-2 bg-white rounded-full"
        >
          {fakeFiles.map((data) => (
            <h2 className="text-gray-800 pr-6" key={data._id}>
              {data.category}
            </h2>
          ))}
        </Marquee>
      </div>

      <div className="flex items-center gap-2">
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="border p-2 rounded-full bg-white"
        >
          {fakeFiles.map((data) => (
            <h2 className="text-blue-600 pr-6" key={data._id}>
              {data.description}USD
            </h2>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HeadingMarquee;
