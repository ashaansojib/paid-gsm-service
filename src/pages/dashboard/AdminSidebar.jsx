import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { FaBoxArchive, FaCircleUser, FaFile, FaHouseChimney, FaUser } from 'react-icons/fa6';

const AdminSidebar = () => {
    return (
        <div className='bg-[#111C43] p-2 h-screen sticky top-0 z-40'>
            <Profile />
            <Link className='admin-nav' to="/admin"><FaHouseChimney/> Dashboard</Link>
            <Link className='admin-nav' to="/admin/create-post"><FaFile />Add Blogs</Link>
            <Link className='admin-nav' to="/admin/post-file"><FaBoxArchive /> add File</Link>
            <Link className='admin-nav' to="/admin/add-tool"><FaBoxArchive /> Tool & Driver</Link>
            <Link className='admin-nav' to="/admin/add-services"><FaHouseChimney/>add Service</Link>
            <Link className='admin-nav' to="/"><FaBoxArchive />add Pages</Link>
            <Link className='admin-nav' to="/admin/add-agent"><FaUser /> Add Agent</Link>
            <button className='admin-nav'><FaCircleUser />Logout</button>
        </div>
    );
};

export default AdminSidebar;