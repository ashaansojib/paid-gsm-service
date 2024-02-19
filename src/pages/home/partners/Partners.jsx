import React from 'react';

const Partners = () => {
    return (
        <div className='my-container p-2 my-4 md:p-0'>
            <h2 className='uppercase text-2xl font-semibold text-gray-800 py-2 text-center'>Our Official Topics</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 justify-between items-center py-4'>
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