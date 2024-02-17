import React from 'react';
import AdminHeader from '../pages/dashboard/AdminHeader';
import AdminSidebar from '../pages/dashboard/AdminSidebar';

const Dashboard = () => {
    return (
        <div>
            <AdminHeader />
            <div className='my-container grid grid-cols-4 justify-between gap-2'>
                <AdminSidebar />
                <div className='col-span-3 border'>
                    this is content for admin dashboard
                </div>
            </div>
        </div>
    );
};

export default Dashboard;