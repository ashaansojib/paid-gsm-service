import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Pagination from "../../components/Pagination";
import { useGetBlogsQuery } from "../../redux/features/baseApi";

const Blogs = () => {
  const { data: allBlogs, isLoading } = useGetBlogsQuery();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("/ToolData.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  if (allBlogs) {
    console.log(allBlogs);
  } else {
    console.log("data loading");
  }
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
