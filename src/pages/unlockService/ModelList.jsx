import React from 'react';
import { useGetServicesQuery } from '../../redux/features/baseApi';

const ModelList = () => {
    const { data: service, isLoading } = useGetServicesQuery();

    return (
        <>
            <table className="table">
                {/* head */}
                <thead className='bg-slate-100'>
                    <tr className='grid grid-cols-4 '>
                        <th>Models</th>
                        <th>CodeName</th>
                        <th className='col-span-2'>Supports</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       isLoading ? <div className='skeleton h-32 w-full'></div>  :  service?.map(item =>
                        <tr key={item._id} className='grid grid-cols-4 mb-1'>
                            <td className='border'>{item.brand} {item.model}</td>
                            <td className='border'>{item.code}</td>
                            <td className='border col-span-2'>{item.services}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default ModelList;