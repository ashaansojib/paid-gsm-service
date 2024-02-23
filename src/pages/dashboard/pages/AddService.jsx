import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useAddServiceMutation } from "../../../redux/features/baseApi";

const AddService = () => {
  const [addOService] = useAddServiceMutation();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    addOService(data);
    reset();
    // success alert
    swal("Good job!", "The post has been published!", "success");
  };
  
  return (
    <div>
      <h2 className="p-4 mb-2 bg-slate-100 font-semibold">
        Write your post info then published :-
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-3 items-center">
          <input
            {...register("brand", { required: true })}
            type="text"
            placeholder="Brand"
            className="input input-bordered w-full"
          />
          <input
            {...register("model", { required: true })}
            type="text"
            placeholder="Model"
            className="input input-bordered w-full"
          />
          <input
            {...register("code", { required: true })}
            type="text"
            placeholder="Codename"
            className="input input-bordered w-full"
          />
          <input
            {...register("services", { required: true })}
            type="text"
            placeholder="Services"
            className="input input-bordered w-full"
          />
          <input
            {...register("date", { required: true })}
            type="date"
            placeholder="Services"
            className="input input-bordered w-full"
          />
          <input type="submit" value="Add Service" className="btn btn-wide" />
          {/* <button onClick={handlePublished} className="btn btn-wide">
            PostNow
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default AddService;
