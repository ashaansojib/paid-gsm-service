import React from "react";
import { Fa6, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { title, date } = tool;
  return (
    <div className="py-2 px-3 bg-slate-100 border mb-2 rounded-xl">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-semibold">{title}</h2>
          <div className="flex py-2">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>
          <span className="text-[12px]">{title}</span>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">{date}</p> |
            <p className="text-sm text-gray-500">Size: 25.00 MB</p>
          </div>
        </div>
        <button className="py-2 px-3 bg-[#0eb131] text-white rounded-md">
          <Link>Download</Link>
        </button>
      </div>
    </div>
  );
};

export default Tool;
