import React, { useState } from "react";
import AdminHeader from "../pages/dashboard/AdminHeader";
import AdminSidebar from "../pages/dashboard/AdminSidebar";
import AdminFooter from "../pages/dashboard/AdminFooter";
import { Outlet, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import swal from "sweetalert";
import ViewPages from "../pages/dashboard/ViewPages";
import UsersCharts from "../pages/dashboard/UsersCharts";
import { useRemoveToolMutation } from "../redux/features/baseApi";

const Dashboard = () => {
  const [removedTool] = useRemoveToolMutation();
  const [showAside, setShowAside] = useState(true);
  const location = useLocation();

  // comfirm delete alert
  const handleDelatePost = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("The post has been permanently removed from the server!", {
          icon: "success",
        });
        removedTool(id);
      } else {
        swal("You don't want to delete it?");
      }
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <FaBars
        onClick={() => setShowAside(!showAside)}
        className="md:hidden block text-3xl absolute top-2 right-2 cursor-pointer"
      />
      <div className="grid md:grid-cols-4 grid-cols-1 justify-between ">
        <div className={`${showAside ? "block" : "hidden"}`}>
          <AdminSidebar />
        </div>
        <div className="col-span-3">
          <AdminHeader />
          <div className="p-2 border">
            {location.pathname == "/admin" ? (
              <>
                <UsersCharts />
                <ViewPages handleDelatePost={handleDelatePost} />
              </>
            ) : (
              <Outlet />
            )}
          </div>
          <AdminFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
