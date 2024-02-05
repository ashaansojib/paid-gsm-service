import React from 'react';

const Partners = () => {
    return (
        <div className='my-container'>
            <h2 className='text-3xl font-medium text-gray-800 py-2'>Our Partners...</h2>
            <div className='grid grid-cols-5 gap-4 justify-between items-center py-4'>
                <div className='border border-gray-400'>
                    <img src="/brands/sony.png" alt="" />
                </div>
                <div className='border border-gray-400'>
                    <img src="/brands/samsung.png" alt="" />
                </div>
                <div className='border border-gray-400'>
                    <img src="/brands/toshiba.png" alt="" />
                </div>
                <div className='border border-gray-400'>
                    <img src="/brands/huawei.png" alt="" />
                </div>
                <div className='border border-gray-400'>
                    <img src="/brands/acer.png" alt="" />
                </div>
                <div className='border border-gray-400'>
                    <img src="/brands/dell.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partners;