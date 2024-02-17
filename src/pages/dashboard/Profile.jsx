import React from 'react';

const Profile = () => {
    return (
        <div className='text-center border-b-2 border-blue-600'>
            <div className='flex justify-center'>
                <img className='w-2/3' src="/logo-removebg-preview.png" alt="" />
            </div>
            <h2 className='font-semibold pt-2'>Welcome To Dashboard</h2>
            <p className='text-sm text-gray-600'>Professional</p>
        </div>
    );
};

export default Profile;