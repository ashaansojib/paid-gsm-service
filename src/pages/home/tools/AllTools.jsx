import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Tool from "./Tool";
import { FaAngleRight, FaHouseChimney } from "react-icons/fa6";

const AllTools = () => {
  const data = useLoaderData();
  return (
    <div className="my-container">
      <div className="p-3 bg-slate-100 italic flex items-center text-gray-600">
        <Link className="flex items-center gap-1 text-sm">
          <FaHouseChimney /> Home
        </Link>
        <FaAngleRight />
        <Link className="text-sm underline">Category</Link>
        <FaAngleRight />
        <Link className="text-sm underline">File Name</Link>
      </div>
      {data.map((tool) => (
        <Tool key={tool._id} tool={tool} />
      ))}
    </div>
  );
};

export default AllTools;
