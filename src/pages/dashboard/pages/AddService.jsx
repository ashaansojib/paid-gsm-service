import React from 'react';
import swal from 'sweetalert';

const AddService = () => {
    const handlePublished = () => {
        swal("Good job!", "The post has been published!", "success");
    }
    return (
        <div>
            <h2 className='p-4 mb-2 bg-slate-100 font-semibold'>Write your post info then published :-</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-3 items-center'>
                <input type="text" placeholder="Brand" className="input input-bordered w-full" />
                <input type="text" placeholder="Model" className="input input-bordered w-full" />
                <input type="text" placeholder="Codename" className="input input-bordered w-full" />
                <input type="text" placeholder="Services" className="input input-bordered w-full" />
                <button onClick={handlePublished} className="btn btn-wide">PostNow</button>
            </div>
        </div>
    );
};

export default AddService;