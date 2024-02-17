import React from 'react';
import { FaSearchengin } from 'react-icons/fa6'
import ModelList from './ModelList';
const UnlockModels = () => {
    return (
        <div className="bg-slate-200 p-4">
            <div className='my-container bg-white p-4 rounded-md'>
                <div className='flex justify-between items-center'>
                    <p>Chooses Your Services Now!</p>
                    <div className='flex'>
                        <ModelList />
                        <input className='border px-2 py-1' placeholder='Brands Name' type="text" name="" id="" />
                        <button className='border p-2 hover:bg-slate-200'><FaSearchengin /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlockModels;