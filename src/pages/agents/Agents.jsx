import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllAgentQuery } from "../../redux/features/baseApi";

const Agents = () => {
  const { data: ourAgents, isLoading } = useAllAgentQuery();
  return (
    <div className="my-container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 justify-between p-2">
      {ourAgents.map((single) => (
        <div className=" border text-center p-2" key={single._id}>
          <div className="flex justify-center items-center">
            <img className="w-4/5 h-[150px]" src={single.image} alt="" />
          </div>
          <h4 className="font-semibold py-2">{single.name}</h4>
          <p className="text-red-600 text-sm mt-2">{single.category}</p>
          <Link
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="mt-2 rounded-md w-full hover:bg-blue-500 py-2 px-4 inline-block bg-slate-500 text-white"
          >
            Full Info
          </Link>
          {/* modal area */}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Reseller</h3>
              <p className="py-4">Worldwide Distributor</p>
              <p>Phone: +0978287829</p>
              <p>Email: ogsmservice@bd.new</p>
              <p></p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      ))}
    </div>
  );
};

export default Agents;
