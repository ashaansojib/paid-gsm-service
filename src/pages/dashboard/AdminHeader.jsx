import React from 'react';
import { FaGear, FaFan, FaRegMoon } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
const AdminHeader = () => {
    return (
        <div className='bg-slate-200 px-3 py-2'>
            <div className="flex justify-between items-center">
                <h2 className='font-semibold'><Link to="/">Home</Link></h2>
                <div className='flex items-center gap-4'>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-600 text-sm'>AshaAnSojib</p>
                        <p className='text-sm text-green-500'>Admin</p>
                    </div>
                    <FaRegMoon />
                    <FaFan className='animate-spin'/>
                    <FaGear className='animate-spin' />
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;