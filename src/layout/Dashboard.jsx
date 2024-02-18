import React, { useState } from 'react';
import AdminHeader from '../pages/dashboard/AdminHeader';
import AdminSidebar from '../pages/dashboard/AdminSidebar';
import AdminFooter from '../pages/dashboard/AdminFooter';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

const Dashboard = () => {
    const [showAside, setShowAside] = useState(false);
    return (
        <div>
            <AdminHeader />
            <FaBars onClick={()=> setShowAside(!showAside)} className='md:hidden block text-3xl absolute top-2 right-2 cursor-pointer' />
            <div className='my-container grid md:grid-cols-4 grid-cols-1 justify-between '>
                <div className={`${showAside ? 'block' : 'hidden'}`}>
                    <AdminSidebar />
                </div>
                <div className='col-span-3 border p-4 m-2 md:m-0'>
                    <Outlet />
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default Dashboard;