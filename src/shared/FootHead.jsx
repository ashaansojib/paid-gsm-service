import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FootHead = () => {
  return (
    <div className="py-8 bg-slate-400">
      <div className="my-container grid grid-cols-4 justify-between gap-4">
        <div>
          <img src="/logo-removebg-preview.png" alt="" />
          <div className="flex justify-center items-center gap-2 pt-2">
            <Link>
              <FaFacebook className="text-3xl" />
            </Link>
            <Link>
              <FaTelegram
                className="text-3xl 
              "
              />
            </Link>
            <Link>
              <FaTwitter
                className="text-3xl 
              "
              />
            </Link>
            <Link>
              <FaYoutube
                className="text-3xl 
              "
              />
            </Link>
            <Link>
              <FaLinkedin
                className="text-3xl 
              "
              />
            </Link>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg p-3">
          <Link className="inline-block w-full text-gray-800" to="/">
            Home
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Shop
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Blog
          </Link>
          <Link
            className="inline-block w-full font-semibol text-gray-800"
            to="/"
          >
            Downloads
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Announcement
          </Link>
        </div>
        <div className="bg-slate-300 rounded-lg p-3">
          <Link className="inline-block w-full text-gray-800" to="/">
            Terms Of Services
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Privacy Policy
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Return Policy
          </Link>
          <Link
            className="inline-block w-full font-semibol text-gray-800"
            to="/"
          >
            Cancellation Policy
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Refound Policy
          </Link>
        </div>
        <div className="bg-slate-300 rounded-lg p-3">
          <Link className="inline-block w-full text-gray-800" to="/">
            Members Area
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Logout
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Blog
          </Link>
          <Link
            className="inline-block w-full font-semibol text-gray-800"
            to="/"
          >
            About Us
          </Link>
          <Link className="inline-block w-full text-gray-800" to="/">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FootHead;
