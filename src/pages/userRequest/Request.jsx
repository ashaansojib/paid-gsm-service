import React from "react";
import { useForm } from "react-hook-form";

const Request = () => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }
  return (
    <div className="py-4 my-container md:px-0 px-2">
      <div className="lg:w-[800px]">
        <h2 className="text-3xl font-light text-gray-800">
          Request Specific File
        </h2>
        <p>
          If you need a specific file, use the from below to send message me.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex justify-between gap-6 py-3">
            <div className="w-full">
              <p className="py-1 text-indigo-500">*Name</p>
              <input
                {...register("name", { required: true })}
                className="p-2 w-full border rounded-md bg-slate-200"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full">
              <p className="py-1 text-indigo-500">*Email</p>
              <input
                {...register("email", { required: true })}
                className="p-2 w-full border rounded-md bg-slate-200"
                placeholder="Your Email"
              />
            </div>
          </div>
          <p className="py-1 text-indigo-500">*Mobile</p>
          <input
            {...register("mobile", { required: true })}
            className="p-2 w-full border rounded-md bg-slate-200"
            placeholder="Your Mobile"
          />
          <div className="py-3">
            <p className="py-1 text-indigo-500">*Subject</p>
            <input
              {...register("filename", { required: true })}
              className="p-2 w-full border rounded-md bg-slate-200"
              placeholder="Your Request File Name"
            />
          </div>
          <div className="py-3">
            <p className="py-1 text-indigo-500">*Message</p>
            <textarea
              {...register("message", { required: true })}
              className="w-full border rounded-md bg-slate-200 p-2"
              placeholder="Type Your Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input type="submit" value="Send Request" className="btn btn-wide" />
        </form>
      </div>
    </div>
  );
};

export default Request;
