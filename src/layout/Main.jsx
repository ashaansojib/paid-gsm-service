import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import FootHead from '../shared/FootHead';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <FootHead />
            <Footer />
        </div>
    );
};

export default Main;