import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import paymentImg from '../../assets/images/payment.jpg';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';

const Payment = ({goBack,hideAll,setShowOrderComplete,clearCart}) => {

    const stripePromise = loadStripe('pk_test_51LWvWaDDEE6lLbIZDTo2iIF4J0GMJFcytTmVtJF7vZ8AKNZEzRfsRjKLZHX7iuYTAyzABxTzaOp2yXD2HLjJHDAf00IIWbej2N');

    return (
        <section className="max-w-screen-xl mx-auto px-6 my-16">
            {/* go back  */}
            <span onClick={goBack}><ArrowSmLeftIcon className='h-6 mb-4 transition duration-300 hover:text-rose-500 cursor-pointer'/></span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-60">
                {/* left side - payment method */}
                <div className="">
                    <h2 className='text-xl font-medium'>Payment Information</h2>
                    <hr className='font-medium mb-[30px]' />

                    <Elements stripe={stripePromise}>
                        <PaymentForm clearCart={clearCart} hideAll={hideAll} setShowOrderComplete={setShowOrderComplete}/>
                    </Elements>

                </div>
                {/* right side - payment thumbnail */}
                <div className="flex flex-col justify-center">
                    <div className='payment-img-wrapper' >
                        <img className="md:h-[500px]" src={paymentImg} alt="payment thumbnail" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;