import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="bg-[#211C6A] mb-2">
      <div className="my-container">
        <ul className="flex flex-col md:flex-row md:items-center">
          <Link className="nav-items" to="/">
            Home
          </Link>
          <Link className="nav-items" to="/price">
            Price & Packages
          </Link>
          <Link className="nav-items" to="/category/Sony%20USB%20Driver">
            Update Tools
          </Link>
          <Link className="nav-items" to="/unlocking-services">
            Services
          </Link>
          <Link className="nav-items" to="/blogs">
            Blogs
          </Link>
          <Link className="nav-items" to="/reseller">
            Our Agents
          </Link>
          <Link className="nav-items" to="/user-request">
            Request File
          </Link>
          <Link className="nav-items" to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
