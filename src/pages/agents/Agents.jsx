import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Agents = () => {
  const [ourAgent, setOurAgent] = useState([]);
  useEffect(() => {
    fetch("/Agents.json")
      .then((res) => res.json())
      .then((data) => setOurAgent(data));
  }, []);
  return (
    <div className="my-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 justify-between">
      {ourAgent.map((single) => (
        <div className=" border text-center p-2" key={single._id}>
            <div className="flex justify-center items-center">
                <img className="w-4/5 h-[150px]" src={single.image} alt="" />
            </div>
          <h4 className="font-semibold py-2">{single.name}</h4>
          <p className="text-red-600 text-sm mt-2">{single.category}</p>
          <Link className="mt-2 rounded-md w-full hover:bg-blue-500 py-2 px-4 inline-block bg-slate-500 text-white">Full Info</Link>
        </div>
      ))}
    </div>
  );
};

export default Agents;
