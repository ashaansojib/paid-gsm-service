import React, { useState } from 'react';
import AdminHeader from '../pages/dashboard/AdminHeader';
import AdminSidebar from '../pages/dashboard/AdminSidebar';
import AdminFooter from '../pages/dashboard/AdminFooter';
import { Outlet, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

const Dashboard = () => {
    const [showAside, setShowAside] = useState(true);
    const location = useLocation();
    return (
        <div>
            <AdminHeader />
            <FaBars onClick={() => setShowAside(!showAside)} className='md:hidden block text-3xl absolute top-2 right-2 cursor-pointer' />
            <div className='my-container grid md:grid-cols-4 grid-cols-1 justify-between '>
                <div className={`${showAside ? 'block' : 'hidden'}`}>
                    <AdminSidebar />
                </div>
                <div className='col-span-3 border p-1 m-2 md:m-0'>

                    {
                        location.pathname == '/admin' ?
                            <div>
                                <div className='md:flex justify-between items-center bg-slate-200 p-2'>
                                    <h2 className=' font-semibold'>Control All Posts :-</h2>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                    </label>
                                </div>
                                {/* posts table */}
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>SL.N</th>
                                                <th>Category</th>
                                                <th>Title</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover">
                                                <th>2</th>
                                                <td>Hart Hagerty</td>
                                                <td>Desktop Support Technician</td>
                                                <td>
                                                    <button className="btn btn-outline btn-primary btn-xs mr-1">Edit</button>
                                                    <button className="btn btn-outline btn-primary btn-xs">Delete</button>
                                                </td>
                                            </tr>
                                            <tr className="hover">
                                                <th>2</th>
                                                <td>Hart Hagerty</td>
                                                <td>Desktop Support Technician</td>
                                                <td>
                                                    <button className="btn btn-outline btn-primary btn-xs mr-1">Edit</button>
                                                    <button className="btn btn-outline btn-primary btn-xs">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* pagination */}
                                <div className='flex justify-center py-3'>
                                    <div className="join">
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="1" />
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="2" />
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="3" />
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="4" />
                                    </div>
                                </div>
                                {/* pages area */}
                                <div className='md:flex justify-between items-center bg-slate-200 p-2'>
                                    <h2 className=' font-semibold'>Control All Pages :-</h2>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                    </label>
                                </div>
                                {/* posts table */}
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>SL.N</th>
                                                <th>Category</th>
                                                <th>Title</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover">
                                                <th>2</th>
                                                <td>Hart Hagerty</td>
                                                <td>Desktop Support Technician</td>
                                                <td>
                                                    <button className="btn btn-outline btn-primary btn-xs mr-1">Edit</button>
                                                    <button className="btn btn-outline btn-primary btn-xs">Delete</button>
                                                </td>
                                            </tr>
                                            <tr className="hover">
                                                <th>2</th>
                                                <td>Hart Hagerty</td>
                                                <td>Desktop Support Technician</td>
                                                <td>
                                                    <button className="btn btn-outline btn-primary btn-xs mr-1">Edit</button>
                                                    <button className="btn btn-outline btn-primary btn-xs">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* pagination */}
                                <div className='flex justify-center py-3'>
                                    <div className="join">
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="1" />
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="2" />
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="3" />
                                        <input className="join-item btn btn-square btn-sm" type="radio" name="options" aria-label="4" />
                                    </div>
                                </div>
                            </div>
                            : <Outlet />
                    }
                </div>
            </div>
            <AdminFooter />
        </div>
    );
};

export default Dashboard;