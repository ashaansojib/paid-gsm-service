import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <div className='flex items-center gap-2 justify-center'>
            <Link to="/" className='p-2 bg-gray-600 inline-block text-white'><FaArrowLeft /></Link>
            <Link to="/" className='py-1 px-2 bg-gray-600 inline-block text-white'>2</Link>
            <Link to="/" className='py-1 px-2 bg-gray-600 inline-block text-white'>3</Link>
            <Link to="/" className='py-1 px-2 bg-gray-600 inline-block text-white'>4</Link>
            <Link to="/" className='py-1 px-2 bg-gray-600 inline-block text-white'>...</Link>
            <Link to="/" className='py-1 px-2 bg-gray-600 inline-block text-white'>45</Link>
        </div>
    );
};

export default Pagination;