import React from "react";
import { FaBoxArchive, FaMoneyCheckDollar, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UsersCharts = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-between p-3 bg-slate-200">
      <div className="flex justify-between items-center gap-2 p-4 rounded-md bg-white">
        <div className="flex gap-2">
          <FaUser className="p-2 text-4xl bg-[#23B7E5] rounded-full text-white" />
          <div>
            <p className="text-sm">Total Visitors</p>
            <p className="font-semibold">1,82,260</p>
            <Link className="underline text-sm">View All</Link>
          </div>
        </div>
        <img className="w-[100px]" src="/admin1.PNG" alt="" />
      </div>
      <div className="flex justify-between items-center gap-2 p-4 rounded-md bg-white">
        <div className="flex gap-2">
          <FaMoneyCheckDollar className="p-2 text-4xl bg-[#845ADF] rounded-full text-white" />
          <div>
            <p className="text-sm">Total Revenue</p>
            <p className="font-semibold">$82,260</p>
            <Link className="underline text-sm">View All</Link>
          </div>
        </div>
        <img className="w-[100px]" src="/admin2.PNG" alt="" />
      </div>
      <div className="flex justify-between items-center gap-2 p-4 rounded-md bg-white">
        <div className="flex gap-2">
          <FaBoxArchive className="p-2 text-4xl bg-[#3437e4] rounded-full text-white" />
          <div>
            <p className="text-sm">Total Posts</p>
            <p className="font-semibold">600</p>
            <Link className="underline text-sm">View All</Link>
          </div>
        </div>
        <img className="w-[100px]" src="/admin1.PNG" alt="" />
      </div>
    </div>
  );
};

export default UsersCharts;
