import React from "react";
import Marquee from "react-fast-marquee";
import {
  useGetAllFilesQuery,
  useGetToolsQuery,
} from "../redux/features/baseApi";

const HeadingMarquee = () => {
  const { data: tools, isLoading } = useGetToolsQuery();
  const { data: files } = useGetAllFilesQuery();
  return (
    <div className="my-container my-8 bg-[#36c574] border rounded-t-full px-12 py-6">
      {isLoading ? (
        <div className="skeleton w-full h-[100px] rounded-t-full px-12 py-6"></div>
      ) : (
        <>
          <div className="flex justify-center items-center gap-2 mb-3 w-3/4 mx-auto">
            <Marquee
              pauseOnHover={true}
              speed={80}
              className="border p-2 bg-white rounded-full"
            >
              {tools?.map((data) => (
                <h2 className="text-gray-800 pr-6" key={data._id}>
                  {data.title}
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
              {files?.map((data) => (
                <h2 className="text-blue-600 pr-6" key={data._id}>
                  {data.title}
                </h2>
              ))}
            </Marquee>
          </div>
        </>
      )}
    </div>
  );
};

export default HeadingMarquee;
