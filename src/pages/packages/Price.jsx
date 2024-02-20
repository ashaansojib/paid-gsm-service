import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Price = () => {
  const navigate = useNavigate();
  const handleActivePackage = () => {
    swal({
      title: "Are you sure?",
      text: "You wanted to buy this package through E-pay!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          navigate('/do-payment')
        } else {
          swal("Packages not activated. Better luck next time!");
        }
      });
  }
  return (
    <div className="p-2 md:p-0 my-container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-between my-6">
      <div className="hover:shadow-lg">
        <h2 className="p-3 mb-2 text-2xl font-semibold bg-orange-500 text-center text-white">
          12 Months Active
        </h2>
        <p className="text-green-500 text-center text-xl py-2">$3.000USD</p>
        <div>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Duration: <span className="text-gray-500">1 Years</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Bandwidth:{" "}
            <span className="text-gray-500">4.00 TB / 5,000 Files</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Usage: <span className="text-gray-500">All Files</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Extra: <span className="text-gray-500">--</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Every: <span className="text-gray-500">--</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Fair Usage: <span className="text-gray-500">Not Applied</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Devices: <span className="text-gray-500">4 PCs</span>
          </p>
        </div>
        <button onClick={handleActivePackage} className="p-3 rounded-md bg-green-500 text-white w-full">Buy Now</button>
      </div>
      <div className="hover:shadow-lg">
        <h2 className="p-3 mb-2 text-2xl font-semibold bg-orange-500 text-center text-white">
          6 Months Active
        </h2>
        <p className="text-green-500 text-center text-xl py-2">$15.000USD</p>
        <div>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Duration: <span className="text-gray-500">6 Months</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Bandwidth:{" "}
            <span className="text-gray-500">2.00 TB / 2,000 Files</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Usage: <span className="text-gray-500">All Files</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Extra: <span className="text-gray-500">--</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Every: <span className="text-gray-500">--</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Fair Usage: <span className="text-gray-500">Not Applied</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Devices: <span className="text-gray-500">3 PCs</span>
          </p>
        </div>
        <button className="p-3 rounded-md bg-green-500 text-white w-full">Buy Now</button>
      </div>
      <div className="hover:shadow-lg">
        <h2 className="p-3 mb-2 text-2xl font-semibold bg-orange-500 text-center text-white">
          Free Packages
        </h2>
        <p className="text-green-500 text-center text-xl py-2">Free</p>
        <div>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Duration: <span className="text-gray-500">1 Years</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Bandwidth:{" "}
            <span className="text-gray-500">10.00 TB</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Usage: <span className="text-gray-500">Non-Featured Files</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Extra: <span className="text-gray-500">--</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Every: <span className="text-gray-500">--</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Fair Usage: <span className="text-gray-500">Not Applied</span>
          </p>
          <p className="p-4 border-t text-gray-800 font-semibold">
            Devices: <span className="text-gray-500">1 PCs</span>
          </p>
        </div>
        <button className="p-3 rounded-md bg-green-500 text-white w-full">Buy Now</button>
      </div>
    </div>
  );
};

export default Price;
