import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useAddBlogsMutation } from "../../../redux/features/baseApi";

const CreatePost = () => {
  const [blogPublish] = useAddBlogsMutation();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const post = {
      title: data.title,
      topDesc: data.topDesc,
      midDesc: data.midDesc,
      laslMidDesc: data.laslMidDesc,
      conclution: data.conclution,
      category: data.category,
      link: data.link,
    };
    reset();
    blogPublish(post);
    // success blog post
    swal("Good job!", "The post has been published!", "success");
  };
  return (
    <div>
      <h2 className="p-4 mb-2 bg-slate-100 font-semibold">
        Write your post info then published :-
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Write the full title with details"
          className="input border-red-500 input-bordered w-full"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 py-2">
          <textarea
            {...register("topDesc", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Top Description"
          ></textarea>
          <textarea
            {...register("midDesc", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Middle Description"
          ></textarea>
          <textarea
            {...register("laslMidDesc", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Last Middle Description"
          ></textarea>
          <textarea
            {...register("conclution", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Conclusion"
          ></textarea>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-3 items-center">
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
          <input type="submit" className="btn btn-wide" value="Published" />
          {/* <button type="submit" >
            Published
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
