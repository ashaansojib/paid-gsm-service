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
    <div id="contact" className="py-8 bg-[#2B2E32] text-white">
      <div className="md:p-0 p-2 my-container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-4">
        <div className="p-3">
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Home
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Shop
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Blog
          </Link>
          <Link
            className="inline-block w-full font-semibol my-1 hover:underline"
            to="/"
          >
            Downloads
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Announcement
          </Link>
        </div>
        <div className="p-3">
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Terms Of Services
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Privacy Policy
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Return Policy
          </Link>
          <Link
            className="inline-block w-full font-semibol my-1 hover:underline"
            to="/"
          >
            Cancellation Policy
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Refound Policy
          </Link>
        </div>
        <div className="p-3">
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Members Area
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Logout
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Blog
          </Link>
          <Link
            className="inline-block w-full my-1 hover:underline"
            to="/"
          >
            About Us
          </Link>
          <Link className="inline-block w-full my-1 hover:underline" to="/">
            Contact Us
          </Link>
        </div>
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
      </div>
    </div>
  );
};

export default FootHead;
