import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Pagination from "../../components/Pagination";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("/ToolData.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="my-container py-4">
      {blog.map((singleBlog) => (
        <Blog key={singleBlog._id} singleBlog={singleBlog} />
      ))}
      <Pagination />
    </div>
  );
};

export default Blogs;
