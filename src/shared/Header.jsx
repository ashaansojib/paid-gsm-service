import React from 'react';
import HeadingMarquee from './HeadingMarquee';
import { Link, useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import MenuBar from './MenuBar';
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
const Header = () => {
    const location = useLocation();
    return (
        <div>
            {/* top header content */}
            <div className='my-container border-b flex justify-between py-3 px-2'>
                <TopNav />
                <div className='flex items-center gap-2'>
                    <FaEnvelope />
                    <Link className='text-hover text-sm' to="mailto:ashaduzzamansojib67@gmail.com">ogsmservice@bd</Link>|
                    <FaPhone />
                    <p className='text-sm'>+880-1892932859</p>
                </div>
            </div>
            {/* main header area */}
            <div className='my-container h-[155px] grid grid-cols-4 px-2 gap-3 justify-between items-center'>
                {/* logo area */}
                <div className="">
                    <img className='h-[132px] w-[200px]' src="/logo.png" alt="" />
                    {/* <h2 className='text-xl font-semibold'><Link to="/">O-GSMService</Link></h2> */}
                </div>
                {/* search box */}
                <div className='col-span-2'>
                    <input className='inline-block w-full p-3 border' type="text" placeholder='Search File' name="" id="" />
                </div>
                {/* user profile and carts area */}
                <div className='flex items-center justify-end gap-2'>
                    <p>Balance: 0 BDT</p>
                    <button className='px-1 py-2 bg-slate-100 rounded-sm hover:bg-blue-600 hover:text-white transition'>Dashboard</button>
                </div>
            </div>
            {/* menu bar in header */}
            <MenuBar />
            {/* ads or updating news area */}
            {
                location.pathname === '/' ? <HeadingMarquee /> : ''
            }
        </div>
    );
};

export default Header;