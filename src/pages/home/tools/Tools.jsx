import React, { useEffect, useState } from "react";
import ToolsCategory from "./ToolsCategory";

const Tools = () => {
  const [tools, getTools] = useState([]);
  useEffect(() => {
    fetch("/Files.json")
      .then((res) => res.json())
      .then((data) => getTools(data));
  }, []);
  return (
    <div className="my-container my-6">
      <h2 className="p-3 font-semibold bg-slate-100 border-b">
        All Upgrade Tools..
      </h2>
      <div className="grid grid-cols-4 justify-between items-center gap-2 p-2">
        {tools.map((singleFile) => (
          <ToolsCategory key={singleFile._id} singleFile={singleFile} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
