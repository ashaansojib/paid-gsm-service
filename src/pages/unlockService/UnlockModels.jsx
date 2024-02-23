import React from "react";
import { FaSearchengin } from "react-icons/fa6";
import BrandList from "./BrandList";
import ModelList from "./ModelList";
import { useGetServicesQuery } from "../../redux/features/baseApi";
const UnlockModels = () => {
  const { data: service, isLoading } = useGetServicesQuery();
  if(service){
    console.log(service)
  }else{
    console.log('loading')
  }
  return (
    <div className="bg-slate-200 p-4">
      <div className="my-container bg-white p-4 rounded-md">
        <div className="md:flex justify-between items-center border p-3">
          <p>Chooses Your Services Now!</p>
          <div className="flex gap-2">
            <BrandList />
            <div className="flex">
              <input
                className="border px-2 py-1"
                placeholder="Brands Name"
                type="text"
                name=""
                id=""
              />
              <button className="border p-2 hover:bg-slate-200">
                <FaSearchengin />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <ModelList />
        </div>
      </div>
    </div>
  );
};

export default UnlockModels;
