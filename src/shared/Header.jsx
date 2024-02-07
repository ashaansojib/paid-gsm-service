import React from 'react';
import HeadingMarquee from './HeadingMarquee';
import { Link, useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import MenuBar from './MenuBar';
import { FaCartArrowDown, FaEnvelope, FaPhone } from 'react-icons/fa6'
const Header = () => {
    const location = useLocation();
    return (
        <div>
            {/* top header content */}
            <div className='my-container border-b md:flex justify-between py-3 px-2 hidden'>
                <TopNav />
                <div className='flex items-center gap-2'>
                    <FaEnvelope />
                    <Link className='text-hover text-sm' to="mailto:ashaduzzamansojib67@gmail.com">ogsmservice@bd</Link>|
                    <FaPhone />
                    <p className='text-sm'>+880-1892932859</p>
                </div>
            </div>
            {/* main header area */}
            <div className='my-container md:h-[155px] grid md:grid-cols-4 grid-cols-1 px-2 gap-3 md:justify-between justify-center items-center'>
                {/* logo area */}
                <div className="">
                    <img className='h-[132px] w-[200px]' src="/logo.png" alt="" />
                    {/* <h2 className='text-xl font-semibold'><Link to="/">O-GSMService</Link></h2> */}
                </div>
                {/* search box */}
                <div className='col-span-2'>
                    <input className='inline-block w-full p-3 border rounded-lg border-[#211C6A]' type="text" placeholder='Search File' name="" id="" />
                </div>
                {/* user profile and carts area */}
                <div className='flex items-center md:justify-end gap-2'>
                    <FaCartArrowDown className='text-3xl' />
                    <div>
                        <span>Your Carts: </span>
                        <p className='text-xl font-semibold'>BDT : 0.0000</p>
                    </div>
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