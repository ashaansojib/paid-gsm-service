import React from 'react';

const ModelList = () => {
    return (
        <table className='w-full'>
            <thead>
                <tr className='grid grid-cols-4 justify-start text-left bg-slate-100'>
                    <th className='border p-2'>Model</th>
                    <th className='border p-2'>CodeName</th>
                    <th className='col-span-2 border p-2'>Supports</th>
                </tr>
            </thead>
            <tbody>
                <tr className='grid grid-cols-4 justify-start text-left bg-slate-100'>
                    <th>Oppo</th>
                    <th>CPH2021</th>
                    <th>FRP_Reset, Password Unlock</th>
                </tr>
            </tbody>
        </table>
    );
};

export default ModelList;