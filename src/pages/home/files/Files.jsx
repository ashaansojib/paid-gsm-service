import React, { useEffect, useState } from 'react';
import { useAsyncValue } from 'react-router-dom';

const Files = () => {
    const [file, getFile] = useState([]);
    useEffect(()=>{
        fetch('/Files.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Files;