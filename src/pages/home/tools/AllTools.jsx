import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tool from './Tool';

const AllTools = () => {
    const data = useLoaderData();
    return (
        <div className='my-container'>
            <p className="text-sm p-2 bg-slate-100 text-gray-600 italic">Home / Drivers / SPD Drivers</p>
            {
                data.map( tool => <Tool key={tool._id} tool={tool} />)
            }
        </div>
    );
};

export default AllTools;