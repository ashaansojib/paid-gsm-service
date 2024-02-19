import React from 'react';
import swal from 'sweetalert';

const CreatePost = () => {
    const handlePublished = () => {
        swal("Good job!", "The post has been published!", "success");
    }
    return (
        <div>
            <h2 className='p-4 mb-2 bg-slate-100 font-semibold'>Write your post info then published :-</h2>
            <input type="text" placeholder="Write the full title with details" className="input border-red-500 input-bordered w-full" />
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 py-2'>
                <textarea className="textarea textarea-bordered" placeholder="Top Description"></textarea>
                <textarea className="textarea textarea-bordered" placeholder="Middle Description"></textarea>
                <textarea className="textarea textarea-bordered" placeholder="Last Middle Description"></textarea>
                <textarea className="textarea textarea-bordered" placeholder="Conclusion"></textarea>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-3 items-center'>
                <input type="text" placeholder="Category" className="input input-bordered w-full" />
                <input type="text" placeholder="Download Link" className="input input-bordered w-full" />
                <button onClick={handlePublished} className="btn btn-wide">Published</button>
            </div>
        </div>
    );
};

export default CreatePost;