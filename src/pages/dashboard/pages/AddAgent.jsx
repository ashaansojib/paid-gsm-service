import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddAgent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        swal("Good Job!", "The suplier is published now.", "success")
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-4'>
                    <input className='input input-bordered w-full' type="text" placeholder='Customer Name' {...register("name", { required: true })} />
                    <input className='input input-bordered w-full' type="text" placeholder='Number' {...register("number", { required: true })} />
                    <input className='input input-bordered w-full' type="text" placeholder='Supplier' {...register("suplier", { required: true })} />
                    <input className='input input-bordered w-full' type="email" placeholder='Email' {...register("email", { required: true })} />
                    <input className='input input-bordered w-full' type="text" placeholder='WhatsApp' {...register("what", { required: true })} />
                    <input className='input input-bordered w-full' type="text" placeholder='Teligram' {...register("teli", { required: true })} />
                    <input className='input input-bordered w-full' type="text" placeholder='WebSite' {...register("web", { required: true })} />
                    <input className='input input-bordered w-full' type="text" placeholder='image link' {...register("image", { required: true })} />
                </div>
                <input type="submit" value="Add Agent" className='btn btn-wide my-2' />
            </form>
        </div>
    );
};

export default AddAgent;