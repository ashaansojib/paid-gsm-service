import React from "react";
import {
  useGetAllFilesQuery,
  useGetToolsQuery,
} from "../../redux/features/baseApi";

const ViewPosts = ({ handleDelatePost, handleDelateDriver }) => {
  const { data: tools, isLoading } = useGetToolsQuery();
  const { data: flashfile } = useGetAllFilesQuery();
  return (
    <>
      <div className="md:flex justify-between items-center bg-slate-100 p-2">
        <h2 className=" font-semibold">Control All Posts :-</h2>
        <label className="input input-bordered input-sm flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search Posts" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {/* posts table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL.N</th>
              <th>Category</th>
              <th>Title</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((data, i) => (
              <tr key={data._id} className="hover">
                <th>{i + 1}</th>
                <td>{data.brand}</td>
                <td>{data.title}</td>
                <td>
                  <button className="btn btn-outline btn-xs mr-1">Edit</button>
                  <button
                    onClick={() => handleDelatePost(data._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex justify-center py-3">
        <div className="join">
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="1"
          />
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
      <div className="md:flex justify-between items-center bg-slate-100 p-2">
        <h2 className=" font-semibold">Control All Tools & Driver :-</h2>
        <label className="input input-bordered input-sm flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search Posts" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {/* posts table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL.N</th>
              <th>Category</th>
              <th>Title</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {flashfile?.map((data, i) => (
              <tr key={data._id} className="hover">
                <th>{i + 1}</th>
                <td>{data.brand}</td>
                <td>{data.title}</td>
                <td>
                  <button className="btn btn-outline btn-xs mr-1">Edit</button>
                  <button
                    onClick={() => handleDelateDriver(data._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center py-3">
        <div className="join">
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="1"
          />
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square btn-sm"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
    </>
  );
};

export default ViewPosts;
