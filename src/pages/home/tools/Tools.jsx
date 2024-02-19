import React, { useEffect, useState } from "react";
import ToolsCategory from "./ToolsCategory";

const Tools = () => {
  const [tools, getTools] = useState([]);
  useEffect(() => {
    fetch("/ToolData.json")
      .then((res) => res.json())
      .then((data) => getTools(data));
  }, []);
  return (
    <div className="my-container my-6 border">
      <h2 className="p-3 font-semibold bg-slate-100 border-b">
        All Upgrade Tools..
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 p-2">
        {tools.map((singleFile) => (
          <ToolsCategory key={singleFile._id} singleFile={singleFile} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
