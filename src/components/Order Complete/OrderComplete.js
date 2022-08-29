import React from 'react';
import locationTrackImg from '../../assets/images/order-track-location.png';
import bikeRiderImg from '../../assets/images/bike-rider.png';
import bikeHelmetImg from '../../assets/images/bike-helmet.png';
const OrderComplete = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 my-16">
            <div className="lg:flex lg:flex-row lg:gap-10">
                {/* left side - order location track img */}
                <div className="basis-3/4 mb-6 lg:mb-0">
                    <img src={locationTrackImg} alt="order track location" />
                </div>
                {/* right side - order track info */}
                <div className="input-bg  basis-1/4 rounded">
                    <div className='p-4' >
                        <img className='h-[120px] w-auto py-4 pl-4' src={bikeRiderImg} alt="bike rider img" />
                        <div className='p-4 space-y-4 bg-white rounded'>
                            <div>
                                <h6 className='text-xl font-medium text-gray-800'>Order Id</h6>
                                <p className='text-gray-500'>62fb1dfc187534d6a9</p>
                            </div>
                            <div>
                                <h6 className='text-xl font-medium text-gray-800'>Your Location</h6>
                                <p className='text-gray-500'>Home</p>
                            </div>
                            <div>
                                <h6 className='text-xl font-medium text-gray-800'>Shop Address</h6>
                                <p className='text-gray-500'>Star Kabab and Restaura</p>
                            </div>
                        </div>
                        <div className='my-6'>
                            <h3 className='text-4xl font-medium text-gray-800'>09:30</h3>
                            <p className='text-gray-500'>Estimated delivery time</p>
                        </div>
                        <div className='flex p-4 bg-white rounded h-[110px]'>
                            <img className='h-[80px] w-auto' src={bikeHelmetImg} alt="bike helmet img" />
                            <div className='ml-4'>
                                <h6 className='text-xl font-medium'>Hamim</h6>
                                <p className='text-gray-500'>Your Rider</p>
                            </div>
                        </div>
                        <button className='bg-primary text-white rounded cursor-pointer py-4 w-full mt-4'>Contact</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderComplete;