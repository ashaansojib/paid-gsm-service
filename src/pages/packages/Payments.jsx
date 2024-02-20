import React from 'react';
import { FaCircleCheck, FaSackDollar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Payments = () => {
    const handleOrdered = () =>{
        swal({
            title: "Good job! Package Activated",
            text: "You buy the package successfully",
            icon: "success",
            button: "Aww yiss!",
          });
    }
    return (
        <div className='py-4 bg-slate-100'>
            <div className='my-container'>
                <h2 className='flex items-center gap-2 p-2 border text-xl font-semibold text-gray-700'><FaSackDollar className='animate-pulse' /> Demo Billing Area</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center gap-3 px-2 border'>
                    <div className='p-3'>
                        <p className=' text-gray-700 pb-2'>Customer Info...</p>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Company*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='Company Name' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>FName*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='First Name' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>LName*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='First Name' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Address*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='Present Address' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>City*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='City Name' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Zip/Postal*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='Postal Code' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Country*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='Country' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Email*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='Email Address' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Phone*</span>
                            <input type="text" name="" className='p-2 col-span-2 w-full text-sm' id="" placeholder='Cell Number' />
                        </label>
                    </div>
                    <div className='p-3'>
                        <p className=' text-gray-700 pb-2'>Billing Details...</p>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Company*</span>
                            <input type="text" name="" className='p-2 col-span-2 text-sm' id="" placeholder='Company Name' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Card Number*</span>
                            <input type="text" name="" className='p-2 col-span-2 text-sm' id="" placeholder='2224/3333/4442/2222' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Expire Date*</span>
                            <input type="date" name="" className='p-2 col-span-2 text-sm' id="" placeholder='2224/3333/4442/2222' />
                        </label>
                        <label className='grid grid-cols-3 gap-2 border items-center mb-3'>
                            <span className='text-gray-600 pl-1'>Security Code*</span>
                            <input type="text" name="" className='p-2 col-span-2 text-sm' id="" placeholder='******' />
                        </label>
                        <div className='bg-slate-200 p-2'>
                            <h2 className='text-xl uppercase'>Package activated for 12 Months</h2>
                            <p className='text-blue-500'>Price: $3.000</p>
                            <Link><p className='flex items-center gap-1 text-sm'><FaCircleCheck /> Aggred with Terms & Conditions?</p></Link>
                            <button onClick={handleOrdered} className='px-3 py-2 bg-green-600 text-white mt-2 rounded-md hover:text-black hover:bg-white'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;