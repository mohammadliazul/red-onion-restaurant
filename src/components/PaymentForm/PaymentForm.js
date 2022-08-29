import React, { useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
const PaymentForm = ({hideAll,setShowOrderComplete, clearCart}) => {
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    // useEffect(() => {
    //   props.markAsPaid(paymentSuccess);
    // } , [paymentSuccess])
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(!stripe || !elements){
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if(paymentMethod === null){
        return;
      }
      // console.log(error, paymentMethod);
      if(error){
        setPaymentError(error);
        setPaymentSuccess(null);
  
      }else{
        setPaymentSuccess(paymentMethod);
        clearCart();
        setPaymentError(null);
      }
    };



    return (
        <form   onSubmit={handleSubmit}>
            <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}/>
            {!paymentSuccess?
            <button type='submit' disabled={!stripe} className='w-16 bg-primary text-white py-2 my-4 mt-7 focus:outline-none poppins rounded cursor-pointer'>Pay</button>:
            <button type='submit' disabled className='w-auto bg-green-500 text-white px-2 py-2 my-4 mt-7 focus:outline-none poppins rounded cursor-not-allowed'>Paid</button>}
            
            {paymentError && <p className='text-primary'>Failed, {paymentError.message}</p>}
            {paymentSuccess && <div> 
              <p className='text-green-500'>Payment completed successfully </p>
              <br />
              <div>
                  <h4 className='text-xl font-medium'>Thank you for completing your order!</h4>
                  <p className='text-slate-500 mb-4'>Your order id is: 4584894</p>
                  <span className='text-primary hover:underline cursor-pointer' onClick={() => { hideAll(); setShowOrderComplete(true) }}>Track your Order</span>
              </div>
              </div>
            }

        </form>
    );
};

export default PaymentForm;