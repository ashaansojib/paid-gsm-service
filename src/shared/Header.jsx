import React from 'react';

const Header = () => {
    return (
        <div>
            {/* top header content */}
            <div className='my-container border-b flex justify-between'>
                <p>Date: 10 June, 2024</p>
                <div className='flex gap-2'>
                    <p>Email: ashaansojib67@gmail.com</p>
                    <p>Phone: (+880) 1892932859</p>
                </div>
            </div>
            {/* main header area */}
            <div className='my-container h-[70px] grid grid-cols-4 gap-3 justify-between items-center'>
                {/* logo area */}
                <div className="">
                    <h2 className='text-xl font-semibold'>O-GSMService</h2>
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
        </div>
    );
};

export default Header;