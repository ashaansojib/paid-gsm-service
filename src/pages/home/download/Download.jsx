import React from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import Review from "./Review";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";

const Download = () => {
  const data = useLoaderData();
  // console.log(location);
  const location = useNavigate();

  // const handlePay = () => {
  //   Swal.fire({
  //     title: "You Have To Pay First",
  //     text: "Otherwise you can't get the download link!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Pay Now",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Link Loading!", "Your file is being ready.", "success").then(
  //         () => {
  //           window.location.href = location.pathname;
  //         }
  //       );
  //     }
  //   });
  // };

  return (
    <div className="my-container">
      <div className="flex gap-2 py-2">
        <button className="text-3xl p-3 rounded-md bg-green-500 text-white">
          <FaArrowLeft />
        </button>
        <div>
          <h3 className="text-xl text-gray-800 font-semibold">SPD DRIVER</h3>
          <p className="font-semibold text-gray-500">Go Back</p>
        </div>
      </div>
      <p className="text-sm p-2 bg-slate-200 italic text-gray-800">
        Home / Drivers / SPD Drivers
      </p>
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
          <button onClick={()=> handleDownload()}
            className="bg-[#0eb131] p-2 w-full mt-3 rounded-md text-white"
          >
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
