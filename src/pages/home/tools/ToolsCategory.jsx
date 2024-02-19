import React from "react";
import { Link } from "react-router-dom";

const ToolsCategory = ({ singleFile }) => {
  const { category, subCategory } = singleFile;
  return (
    <div className="flex gap-2 my-2">
      <div className="w-[90px]">
        <Link to={`category/${subCategory}`}>
          <img src="/tools-icons.png" alt="" />
        </Link>
      </div>
      <div>
        <Link to={`category/${subCategory}`}>
          <h2 className="text-xl font-semibold">{category}</h2>
        </Link>
        <p className="italic text-slate-600 text-sm">
          All Brands are available
        </p>
      </div>
    </div>
  );
};

export default ToolsCategory;
