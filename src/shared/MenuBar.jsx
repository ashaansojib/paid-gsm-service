import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa6'
import { useState } from "react";
const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="bg-[#211C6A]">
      <div className="my-container relative">
        <FaBars onClick={()=> setShowMenu(!showMenu)} className="text-3xl cursor-pointer md:hidden block absolute right-2 -top-8" />
        <ul className={`flex md:flex-row flex-col md:items-center ${showMenu ? 'block' : 'hidden'}`}>
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
