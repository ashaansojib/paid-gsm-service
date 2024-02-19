import React from "react";
import Files from "../pages/home/files/Files";
import Tools from "../pages/home/tools/Tools";
import Partners from "../pages/home/partners/Partners";

const Home = () => {
  return (
    <div>
      <div className="bg-teal-50 py-4">
        <Files />
      </div>
      <div className="py-4 bg-stone-100">
        <Tools />
      </div>
      <Partners />
    </div>
  );
};

export default Home;
