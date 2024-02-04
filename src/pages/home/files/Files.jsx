import React, { useEffect, useState } from "react";
import FilesCategory from "./FilesCategory";

const Files = () => {
  const [files, getFiles] = useState([]);
  useEffect(() => {
    fetch("/Files.json")
      .then((res) => res.json())
      .then((data) => getFiles(data));
  }, []);
  return (
    <div className="my-container bg-slate-200 my-3">
      <h2 className="text-white p-3 font-semibold bg-blue-500">All Files Section..</h2>
      <div className="grid grid-cols-4 justify-between items-center gap-2 my-2 p-2">
        {files.map((singleFile) => (
          <FilesCategory key={singleFile._id} singleFile={singleFile} />
        ))}
      </div>
    </div>
  );
};

export default Files;
