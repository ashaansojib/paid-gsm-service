import React from 'react';

const AddService = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-3 items-center'>
            <input type="text" placeholder="Brand" className="input input-bordered w-full" />
            <input type="text" placeholder="Model" className="input input-bordered w-full" />
            <input type="text" placeholder="Codename" className="input input-bordered w-full" />
            <input type="text" placeholder="Services" className="input input-bordered w-full" />
            <button className="btn btn-wide">PostNow</button>
        </div>
    );
};

export default AddService;