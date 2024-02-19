import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa6'
import { useState } from "react";
const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="bg-[#2B2E32]">
      <div className="my-container relative">
        <FaBars onClick={() => setShowMenu(!showMenu)} className="text-3xl cursor-pointer p-1 absolute right-2 top-2 md:hidden block bg-white" />
        <ul className={`p-2 md:p-0 flex md:flex-row flex-col md:gap-6 md:items-center ${showMenu ? 'block' : 'hidden'}`}>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/price">
            Price & Packages
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/category/Sony%20USB%20Driver">
            Update Tools
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/unlocking-services">
            Services
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/blogs">
            Blogs
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/reseller">
            Our Agents
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/user-request">
            Request File
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;