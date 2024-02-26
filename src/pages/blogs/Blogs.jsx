import React from "react";
import Blog from "./Blog";
import Pagination from "../../components/Pagination";
import { useGetBlogsQuery } from "../../redux/features/baseApi";

const Blogs = () => {
  const { data: allBlogs, isLoading } = useGetBlogsQuery();

  return (
    <div className="my-container py-4">
      {allBlogs?.map((singleBlog) => (
        <Blog key={singleBlog._id} singleBlog={singleBlog} />
      ))}
      <Pagination />
    </div>
  );
};

export default Blogs;
