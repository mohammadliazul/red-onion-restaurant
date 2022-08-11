import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate =useNavigate();
    return (
        <section className='signup-bg'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h2 className='text-gray-800 text-8xl font-normal font-sans'>404</h2>
                <h6 className='text-base font-medium text-gray-500 my-2 font-sans'>Page Not Found</h6>
                <button className="bg-primary px-6 py-3 text-white poppins rounded-full focus:outline-none transform transition duration-500 hover:scale-105 cursor-pointer mt-4" onClick={() => navigate('/')}>Back to Home</button>
            </div>
        </section>
    );
};

export default NotFound;