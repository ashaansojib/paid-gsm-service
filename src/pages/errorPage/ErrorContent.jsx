import React from 'react';
import { Link } from 'react-router-dom';

const ErrorContent = () => {
    return (
        <div>
            this is error get go back to home <Link to='/'>Home</Link>
        </div>
    );
};

export default ErrorContent;