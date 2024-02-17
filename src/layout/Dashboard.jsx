import React from 'react';
import AdminHeader from '../pages/dashboard/AdminHeader';
import AdminSidebar from '../pages/dashboard/AdminSidebar';
import AdminFooter from '../pages/dashboard/AdminFooter';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <AdminHeader />
            <div className='my-container grid grid-cols-4 justify-between '>
                <AdminSidebar />
                <div className='col-span-3 border p-2'>
                    <Outlet />
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default Dashboard;