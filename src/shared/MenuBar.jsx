import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className='bg-blue-200 mb-2'>
            <div className="my-container">
                <div>
                    <ul className='flex items-center gap-2'>
                        <li className='bg-amber-500 p-2'><Link to="/">Home</Link></li>
                        <li className='bg-amber-500 p-2' ><Link to="/">Price & Packages</Link></li>
                        <li  className='bg-amber-500 p-2' ><Link to="/">Update Tools</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;