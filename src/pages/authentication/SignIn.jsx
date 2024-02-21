import React from 'react';
import { FaCheck, FaI, FaLockOpen, FaUserCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='my-container grid md:grid-cols-2 justify-between items-center grid-cols-1 my-4 gap-12 p-2'>
            <div>
                <h2 className='text-2xl py-2 flex items-center gap-2 border-b'><FaLockOpen /> Login to your account</h2>
                <label>
                    <p className='text-sm py-2'>Your Name</p>
                    <input type="text" className='input input-bordered input-sm bg-slate-100 w-full' placeholder='Username or Email' />
                </label>
                <label className='py-3 inline-block w-full'>
                    <p className='text-sm py-2'>Passwod</p>
                    <input type="password" className='input input-bordered input-sm bg-slate-100 w-full' placeholder='Password' />
                </label>
                <div className='flex justify-between items-center'>
                    <label className='py-2 inline-block text-sm'>
                        <input type="checkbox" name="" id="" />
                        <span>Remember Me</span>
                    </label>
                    <p className='text-sm hover:underline'>Forgot Your Password?</p>
                </div>
                <button className='p-4 bg-green-500 text-white rounded-md uppercase flex items-center gap-2'><FaLockOpen /> Secure Login</button>
            </div>
            <div>
                <h2 className='text-2xl py-2 flex items-center gap-2 border-b'><FaI /> Don't have account yet!</h2>
                <Link to="/sign-up">
                <button className='p-4 bg-green-500 text-white rounded-md uppercase flex items-center gap-2 my-4'><FaUserCheck /> Create account</button>
                </Link>
                <div className='md:space-y-4'>
                    <p className='flex gap-2 items-center'><FaCheck className='text-green-500'/> Speed your way through the checkout</p>
                    <p className='flex gap-2 items-center'><FaCheck className='text-green-500'/>Track your orders easily</p>
                    <p className='flex gap-2 items-center'><FaCheck className='text-green-500'/>Keep a record of all your purchases</p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;