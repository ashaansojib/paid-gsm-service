import React from "react";
import { Link } from "react-router-dom";

const ToolsCategory = ({ singleFile }) => {
  const { brand } = singleFile;
  return (
    <div data-aos="zoom-in" className="flex gap-2 my-2">
      <div className="w-[90px]">
        <Link to={`/category/${brand}`}>
          <img src="/tools-icons.png" alt="" />
        </Link>
      </div>
      <div>
        <Link to={`/category/${brand}`}>
          <h2 className="text-xl font-semibold uppercase">{brand}</h2>
        </Link>
        <p className="italic text-slate-600 text-sm">
          All Brands are available
        </p>
      </div>
    </div>
  );
};

export default ToolsCategory;
