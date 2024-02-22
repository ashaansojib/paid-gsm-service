import React from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa6";
import swal from "sweetalert";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    swal("You have to Download first!", "Then you can share you opinion. Thank You!", "info");
    reset()
  }
  return (
    <div className="my-container md:p-2 p-2">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="pt-4">Review</p>
          <textarea {...register("comments", { required: true })} className="border border-gray-400 w-full rounded-md bg-gray-200" cols="30" rows="10"></textarea>
          <input type="submit" value="Submit" className="p-3 bg-green-600 rounded-md text-white" />
        </form>
      </div>
    </div>
  );
};

export default Review;
