import React from 'react';

const ModelList = () => {
    return (
        <div className="">
            <table className="table">
                {/* head */}
                <thead className='bg-slate-100'>
                    <tr className='grid grid-cols-4 '>
                        <th>Models</th>
                        <th>CodeName</th>
                        <th className='col-span-2'>Supports</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {/* row 1 */}
                    <tr className='grid grid-cols-4 mb-1'>
                        <td className='border'>Oppo</td>
                        <td className='border'>A9 2024</td>
                        <td className='border col-span-2'>Frp, Unlcok</td>
                    </tr>
                    {/* row 1 */}
                    <tr className='grid grid-cols-4 mb-1'>
                        <td className='border'>Xioami</td>
                        <td className='border'>X9 pro</td>
                        <td className='border col-span-2'>Frp, Mi unlock</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ModelList;