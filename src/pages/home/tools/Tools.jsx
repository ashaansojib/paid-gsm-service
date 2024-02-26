import React from "react";
import ToolsCategory from "./ToolsCategory";
import { FaGear } from "react-icons/fa6";
import { useGetToolAndDriverQuery } from "../../../redux/features/baseApi";

const Tools = () => {
  const { data: toolAndDriver, isLoading } = useGetToolAndDriverQuery();
  return (
    <div className="my-container my-6 border">
      <h2 className="p-3 font-semibold bg-slate-100 border-b flex items-center gap-2">
        <FaGear className="animate-spin" />
        All Upgrade Tools..
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 p-2">
        {
          isLoading ? <div className="skeleton h-32 w-full"></div> : toolAndDriver?.map((singleFile) => (
            <ToolsCategory key={singleFile._id} singleFile={singleFile} />
          ))
        }
      </div>
    </div>
  );
};

export default Tools;
