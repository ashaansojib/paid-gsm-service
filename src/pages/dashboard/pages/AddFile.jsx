import React from "react";
import { useForm } from "react-hook-form";
import { useAddFileMutation, useGetAllFilesQuery } from "../../../redux/features/baseApi";
import ControlPages from "./ControlPages";

const AddFile = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: files, isLoading } = useGetAllFilesQuery()
  const [addedFilePost] = useAddFileMutation();
  const onSubmit = (data) => {
    const post = {
      title: data.title,
      brand: data.brand.toUpperCase(),
      size: data.size,
      image: data.image,
      category: data.category,
      link: data.link,
      date: data.date,
      visitor: 0,
      download: 0,
      fileName: data.title + ".xip",
    };
    reset();
    addedFilePost(post);
    swal("Good job!", "The post has been published!", "success");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Write the full title with details"
          className="input border-red-500 input-bordered w-full"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 py-2">
          <input
            {...register("brand", { required: true })}
            className="input input-bordered"
            placeholder="Brand"
          ></input>
          <input
            {...register("size", { required: true })}
            className="input input-bordered"
            placeholder="File Size"
          ></input>
          <input
            {...register("image", { required: true })}
            className="input input-bordered"
            placeholder="image link"
          ></input>
          <input
            {...register("category", { required: true })}
            type="text"
            placeholder="Category"
            className="input input-bordered w-full"
          />
          <input
            {...register("link", { required: true })}
            type="text"
            placeholder="Download Link"
            className="input input-bordered w-full"
          />
          <input
            {...register("date", { required: true })}
            type="date"
            className="input input-bordered w-full"
          />
          <input
            type="submit"
            className="btn btn-wide"
            value="Published"
          />
        </div>
      </form>
      {/* see all the files */}
      {
        isLoading ?
          <div className="skeleton h-52 w-full"></div> :
          <ControlPages tool={files} />
      }
    </>
  );
};

export default AddFile;
