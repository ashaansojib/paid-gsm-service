import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            this is home
            <Link to='/about-us'>About us</Link>
        </div>
    );
};

export default Home;