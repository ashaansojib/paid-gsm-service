import React from "react";

const Request = () => {
  return (
    <div className="py-4 my-container">
      <div className="w-[800px]">
        <h2 className="text-3xl font-light text-gray-800">
          Request Specific File
        </h2>
        <p>
          If you need a specific file, use the from below to send message me.
        </p>
        <form action="">
          <div className="flex justify-between gap-6 py-3">
            <div className="w-full">
              <p className="py-1 text-indigo-500">*Name</p>
              <input
                className="p-2 w-full border rounded-md bg-slate-200"
                placeholder="Your Name"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-full">
              <p className="py-1 text-indigo-500">*Email</p>
              <input
                className="p-2 w-full border rounded-md bg-slate-200"
                placeholder="Your Email"
                type="email"
                name=""
                id=""
              />
            </div>
          </div>
          <p className="py-1 text-indigo-500">*Mobile</p>
          <input
            className="p-2 w-full border rounded-md bg-slate-200"
            placeholder="Your Mobile"
            type="text"
            name=""
            id=""
          />
          <div className="py-3">
            <p className="py-1 text-indigo-500">*Subject</p>
            <input
              className="p-2 w-full border rounded-md bg-slate-200"
              placeholder="Your Request File Name"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="py-3">
            <p className="py-1 text-indigo-500">*Message</p>
            <textarea
              name=""
              className="w-full border rounded-md bg-slate-200 p-2"
              placeholder="Type Your Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
        <button className="p-4 rounded-md bg-green-500 text-white">
          Send Request
        </button>
      </div>
    </div>
  );
};

export default Request;
