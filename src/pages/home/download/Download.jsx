import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const Download = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="my-container text-center py-8 border rounded-lg">
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
        <h3 className="p-1 text-white bg-gray-400 w-1/3 rounded-md mx-auto my-2">
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
        <Link to="/">
          <button className="bg-[#0eb131] p-2 w-full mt-3 rounded-md text-white">
            Download Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Download;
