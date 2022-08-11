import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Banner from '../components/Banner/Banner';
import Foods from '../components/Foods Showcase/Foods';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Foods />
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default Home;
