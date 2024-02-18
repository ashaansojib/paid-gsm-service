import React from 'react';
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
const AdminHeader = () => {
    return (
        <div className='bg-slate-200 p-3'>
            <div className="my-container">
                <ul>
                    <Link to="/admin">Dashboard</Link>
                </ul>
            </div>
        </div>
    );
};

export default AdminHeader;