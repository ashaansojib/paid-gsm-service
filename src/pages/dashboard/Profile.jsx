import React from 'react';

const Profile = () => {
    return (
        <div className='text-center border-b'>
            <div className='flex justify-center'>
                <img className='w-2/3' src="/logo-removebg-preview.png" alt="" />
            </div>
            <h2 className='font-semibold pt-2 text-slate-100'>Welcome To Dashboard</h2>
            <p className='text-sm text-gray-200 pb-2'>Professional</p>
        </div>
    );
};

export default Profile;