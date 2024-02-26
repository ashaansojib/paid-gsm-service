import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ singleBlog }) => {
  const { title, _id } = singleBlog;
  return (
    <div className="border p-4 mb-4 mx-2 md:flex justify-between items-center gap-6">
      <div className="w-2/4">
        <img
          src="https://gdsrom.com/media/products/thumbnails/2023/09/23/2-1695511274.png"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold hover:text-blue-500"><Link to={`/details/${_id}`}>{title}</Link></h2>
        <p className="p-2 text-gray-400 text-sm">
          10 July, 2024 | Author By AshaAnSojib
        </p>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste
          libero soluta voluptas. Ducimus cumque unde qui hic magni, incidunt
          accusamus repellendus nulla consectetur amet minima voluptatum eos
          reprehenderit nihil.
        </p>
        <Link to={`/details/${_id}`} className="px-4 py-2 bg-green-500 text-white rounded-md mt-3 inline-block">Read More</Link>
      </div>
    </div>
  );
};

export default Blog;
