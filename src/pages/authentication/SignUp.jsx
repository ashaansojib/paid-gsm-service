import React from 'react';
import { FaCheck, FaLock, FaUser } from 'react-icons/fa6';
import swal from 'sweetalert';

const SignUp = () => {
    const handleRegister = () =>{
        swal('Register  Done!', 'You Successfully Registration Today', 'success')
    }
    return (
        <div className='my-container py-4 px-2'>
            <h2 className='text-xl flex items-center gap-2 py-2 border-b'><FaUser /> Personal Details</h2>
            <div className='py-2'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-2 items-center justify-between'>
                    <label>
                        <p className='text-sm py-2'>* Your Name</p>
                        <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Full Name' name="" id="" />
                    </label>
                    <label>
                        <p className='text-sm py-2'>* Phone</p>
                        <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Phone Number' name="" id="" />
                    </label>
                    <label>
                        <p className='text-sm py-2'>* Country</p>
                        <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Country Name' name="" id="" />
                    </label>
                    <label>
                        <p className='text-sm py-2'>* City</p>
                        <input type="text" className='p-2 bg-slate-200 w-full' placeholder='City' name="" id="" />
                    </label>
                </div>
                <label>
                    <p className='text-sm py-2'>* Address</p>
                    <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Street Address' name="" id="" />
                </label>
                <label>
                    <p className='text-sm py-2'>* ZIP Code</p>
                    <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Postal Code' name="" id="" />
                </label>
            </div>
            <h2 className='text-xl flex items-center gap-2 py-2 border-b'><FaLock /> Account Details</h2>
            <div className='py-2'>
                <label>
                    <p className='text-sm py-2'>* Email Address</p>
                    <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Full Name' name="" id="" />
                </label>
                <label>
                    <p className='text-sm py-2'>* Username</p>
                    <input type="text" className='p-2 bg-slate-200 w-full' placeholder='username' name="" id="" />
                </label>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-between'>
                    <label>
                        <p className='text-sm py-2'>* Password</p>
                        <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Password' name="" id="" />
                    </label>
                    <label>
                        <p className='text-sm py-2'>* Confirm Password</p>
                        <input type="text" className='p-2 bg-slate-200 w-full' placeholder='Retype Pass' name="" id="" />
                    </label>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <p>By Proceeding You Agree To <span className='text-green-500'>Terms Of Service</span></p>
            </div>
            <button onClick={handleRegister} className='px-4 py-3 bg-green-500 text-white rounded-md uppercase flex items-center gap-2 my-4'><FaCheck /> Complete Registration</button>
        </div>
    );
};

export default SignUp;