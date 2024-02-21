import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { FaBoxArchive, FaCircleUser, FaFile, FaHouseChimney } from 'react-icons/fa6';

const AdminSidebar = () => {
    return (
        <div className='bg-[#111C43] p-2 h-screen sticky top-0 z-40'>
            <Profile />
            <Link className='admin-nav' to="/admin/add-services"><FaHouseChimney/> Services</Link>
            <Link className='admin-nav' to="/admin/create-post"><FaFile /> Posts</Link>
            <Link className='admin-nav' to="/"><FaBoxArchive /> Pages</Link>
            <button className='admin-nav'><FaCircleUser />Logout</button>
        </div>
    );
};

export default AdminSidebar;