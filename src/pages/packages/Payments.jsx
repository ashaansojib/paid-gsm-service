import React from 'react';
import { FaSackDollar } from 'react-icons/fa6';

const Payments = () => {
    return (
        <div className='py-4 bg-slate-100'>
            <div className='my-container'>
                <h2 className='flex items-center gap-2 p-2 border text-xl font-semibold text-gray-700'><FaSackDollar className='animate-pulse' /> Demo Billing Area</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center gap-3 px-2 border'>
                    <div className='p-3'>
                        <p className=' text-gray-700 pb-2'>Customer Info...</p>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Company*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Company Name' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>FName*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='First Name' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>LName*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='First Name' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Address*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Present Address' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>City*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='City Name' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Zip/Postal*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Postal Code' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Country*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Country' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Email*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Email Address' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Phone*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Cell Number' />
                        </label>
                    </div>
                    <div className='py-3'>
                        <p className=' text-gray-700 pb-2'>Billing Details...</p>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Company*</span>
                            <input type="text" name="" className='p-2 w-full text-sm' id="" placeholder='Company Name' />
                        </label>
                        <label className='flex gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1 w-1/4'>Card Number*</span>
                            <input type="text" name="" className='p-2 inline-block text-sm' id="" placeholder='Company Name' />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;