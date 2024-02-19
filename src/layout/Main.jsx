import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import FootHead from '../shared/FootHead';
import Featured from '../pages/home/homeFeatured/Featured';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
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