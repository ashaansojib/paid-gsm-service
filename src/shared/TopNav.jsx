import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div>
            <ul className='flex gap-2 items-center '>
                <li><Link to="about-us">About Us</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Imei Check</Link></li>
            </ul>
        </div>
    );
};

export default TopNav;