import React from "react";
import { Link } from "react-router-dom";

const FilesCategory = ({ singleFile }) => {
  const { brand, category } = singleFile;
  return (
    <div data-aos="zoom-in" className="flex gap-2 white my-2">
      <div className="w-[90px]">
        <Link to="/category/ADB%20Driver">
          <img src="/folder.png" alt="" />
        </Link>
      </div>
      <div>
        <Link to="/category/ADB%20Driver">
          <h2 className="text-xl font-semibold">{brand}</h2>
        </Link>
        <p className="italic text-slate-600 text-sm">
          All Brands are available
        </p>
      </div>
    </div>
  );
};

export default FilesCategory;
