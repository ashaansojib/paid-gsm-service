import React from "react";
import FilesCategory from "./FilesCategory";
import { FaBolt } from "react-icons/fa6";
import { useGetUniquePostQuery } from "../../../redux/features/baseApi";

const Files = () => {
  const { data: filesOrg, isLoading } = useGetUniquePostQuery();
  return (
    <div className="my-container my-6 border">
      <h2 className="p-3 font-semibold border-b bg-slate-100 flex items-center gap-2">
        <FaBolt className="animate-bounce" /> All Files Section..
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 my-2 p-2">
        {isLoading
          ? <div className="skeleton"></div>
          : filesOrg?.map((singleFile) => (
            <FilesCategory key={singleFile._id} singleFile={singleFile} />
          ))}
      </div>
    </div>
  );
};

export default Files;
