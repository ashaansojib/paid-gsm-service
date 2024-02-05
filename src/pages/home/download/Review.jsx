import React from "react";
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="my-container">
      <button className="px-6 py-4 bg-teal-600 text-white rounded-t-md">
        Reviews
      </button>
      <div className="p-8 border border-teal-600">
        <p className="text-2xl text-slate-500">Review This!</p>
        <span className="text-sm text-gray-800">Rating</span>
        <div className="flex py-4">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
        </div>
        <h3 className="p-2 bg-green-600 rounded-sm text-white">
          You can review this file after download
        </h3>
        <p className="py-4">Review</p>
        <textarea className="border border-gray-400 w-full rounded-md bg-gray-200" name="" id="" cols="30" rows="10"></textarea>
        <button className="p-3 bg-green-600 rounded-md text-white">Submit</button>
      </div>
    </div>
  );
};

export default Review;
