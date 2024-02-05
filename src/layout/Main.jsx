import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import FootHead from '../shared/FootHead';
import Featured from '../pages/home/homeFeatured/Featured';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Featured />
            <FootHead />
            <Footer />
        </div>
    );
};

export default Main;