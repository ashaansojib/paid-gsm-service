import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tool from './Tool';

const AllTools = () => {
    const data = useLoaderData();
    return (
        <div className='my-container'>
            {
                data.map( tool => <Tool key={tool._id} tool={tool} />)
            }
        </div>
    );
};

export default AllTools;