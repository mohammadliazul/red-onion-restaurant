import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Banner from '../components/Banner/Banner';
import Foods from '../components/Foods Showcase/Foods';
import Header from '../components/Header/Header';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Foods />
            <AboutUs/>
        </>
    );
}

export default Home;
