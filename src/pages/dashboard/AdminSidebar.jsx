import React from 'react';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='bg-gray-100 p-2'>
            <Profile />
            <Link className='inline-block border-b px-2 py-2 bg-slate-100 w-full hover:bg-blue-300 font-semibold text-left' to="/">Services</Link>
            <Link className='inline-block border-b px-2 py-2 bg-slate-100 w-full hover:bg-blue-300 font-semibold text-left' to="/">Posts</Link>
            <Link className='inline-block border-b px-2 py-2 bg-slate-100 w-full hover:bg-blue-300 font-semibold text-left' to="/">Pages</Link>
            <button className='px-2 py-2 bg-slate-100 w-full hover:bg-blue-300 font-semibold text-left'>Logout</button>
        </div>
    );
};

export default AdminSidebar;