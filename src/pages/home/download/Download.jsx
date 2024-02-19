import React from "react";
import {
  FaAngleRight,
  FaArrowLeft,
  FaHouseChimney,
  FaStar,
} from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Review from "./Review";
import swal from "sweetalert";

const Download = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleDownload = () =>{
    swal("It's not for visitor!", "Go to price & Packages page! Only active member can download", "error");
  }
  return (
    <div className="my-container">
      <div className="flex gap-2 py-2">
        <button
          onClick={handleBack}
          className="text-3xl p-3 rounded-md bg-green-500 text-white"
        >
          <FaArrowLeft />
        </button>
        <div>
          <h3 className="text-xl text-gray-800 font-semibold">SPD DRIVER</h3>
          <p className="font-semibold text-gray-500">Go Back</p>
        </div>
      </div>
      <div className="p-3 bg-slate-100 italic flex items-center text-gray-600">
        <Link className="flex items-center gap-1 text-sm">
          <FaHouseChimney /> Home
        </Link>
        <FaAngleRight />
        <Link className="text-sm underline">Category</Link>
        <FaAngleRight />
        <Link className="text-sm underline">File Name</Link>
      </div>
      <div className="text-center py-8 border rounded-b-lg mb-4">
        <h1 className="text-3xl">SPD DRIVER BY GDSROM</h1>
        <div className="flex justify-center py-2">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
        </div>
        <div className="p-4">
          <p className="text-sm">SAMSUNG DRIVER BY GDSROM</p>
          <h3 className="p-1 text-white bg-gray-400 md:w-1/3 rounded-md mx-auto my-2">
            SAMSUNG DRIVER BY GDSROM
          </h3>
          <p className="font-semibold border-b py-2 border-t">
            Date:- <span className="text-gray-600">12.12.2023 10:29:33AM</span>
          </p>
          <p className="font-semibold border-b py-2 border-t my-2">
            FileSize:- <span className="text-gray-600">25.00 MB</span>
          </p>
          <p className="font-semibold border-b py-2 border-t my-2">
            Visits:- <span className="text-gray-600">1875</span>
          </p>
          <p className="font-semibold border-b py-2 border-t my-2">
            Downloads:- <span className="text-gray-600">450</span>
          </p>
          <button onClick={handleDownload} className="bg-[#0eb131] p-2 w-full mt-3 rounded-md text-white">
            Download Now
          </button>
        </div>
      </div>
      {/* reviews section */}
      <Review />
    </div>
  );
};

export default Download;
