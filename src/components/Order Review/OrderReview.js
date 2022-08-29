import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import { useForm } from 'react-hook-form';
import { BsDash, BsPlus } from 'react-icons/bs';
import React from 'react';

const OrderReview = ({ goBack, hideAll, setShowPayment, deliveryData, setDeliveryData, cart, clearCart, checkOutItemHandler }) => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    const subTotal = cart.reduce((acc,crr) => {
        return acc + (crr.price * crr.quantity) ;
    },0)
    const totalQuantity = cart.reduce((acc,crr) => {
        return acc + crr.quantity ;
    },0)
    const tax = (subTotal / 100) * 5;
    const deliveryFee = totalQuantity && 2;
    const grandTotal = subTotal + tax + deliveryFee;


    const onSubmit = data => {
        setDeliveryData(data);
    }

    return (
        <section className="max-w-screen-xl mx-auto px-6 my-16">
            {/* go back  */}
            <span onClick={goBack}><ArrowSmLeftIcon className='h-6 mb-4 transition duration-300 hover:text-rose-500 cursor-pointer'/></span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left side - delivery-details */}
                <div className="flex flex-col">
                    <h2 className='text-xl font-medium'>Edit Delivery Details</h2>
                    <hr className='font-medium mb-[15px]' />
                    <form className='flex flex-col mt-[15px]' onSubmit={handleSubmit(onSubmit)}>
                        <input className='px-5 py-[15px] input-bg border-none rounded text-[15px] focus:outline-none'
                            defaultValue={deliveryData?.deliveryType}
                            {...register('deliveryType', { required: "This Field is Required" })}
                            placeholder="Delivery Type (Home Delivery, Pick up)"
                        />
                        <p className='mb-[10px] text-primary text-sm'>{errors.deliveryType?.message}&nbsp;</p>

                        <input className='px-5 py-[15px] input-bg border-none rounded text-[15px] focus:outline-none'
                            defaultValue={deliveryData?.roadNo}
                            {...register('roadNo', { required: "This Field is Required" })}
                            placeholder="Road no"
                        />
                        <p className='mb-[10px] text-primary text-sm'>{errors.roadNo?.message}&nbsp;</p>

                        <input className='px-5 py-[15px] input-bg border-none rounded text-[15px] focus:outline-none'
                            defaultValue={deliveryData?.flat}
                            {...register('flat', { required: "This Field is Required" })}
                            placeholder="Flat, Suit or Floor"
                        />
                        <p className='mb-[10px] text-primary text-sm'>{errors.flat?.message}&nbsp;</p>

                        <input className='px-5 py-[15px] input-bg border-none rounded text-[15px] focus:outline-none'
                            defaultValue={deliveryData?.buisiness}
                            {...register('buisiness',)}
                            placeholder="Business Name (optional)"
                        />
                        <p className='mb-[10px] text-primary text-sm'>&nbsp;</p>

                        <input className='px-5 py-[15px] input-bg border-none rounded text-[15px] focus:outline-none'
                            defaultValue={deliveryData?.instructor}
                            {...register('instructor',)}
                            placeholder="Add Delivery Instructor (optional)"
                        />
                        <p className='mb-[10px] text-primary text-sm'>&nbsp;</p>

                        <button className='bg-primary text-white px-5 py-[15px] focus:outline-none poppins rounded cursor-pointer'>Save & Continue</button>
                    </form>
                </div>
                {/* right side - place-order */}
                <div className="flex flex-col justify-center">
                    <p>From <strong>Gulshan Plaza Restaura GPR</strong></p>
                    <p>Arriving in 20-30 min</p>
                    <p>Road: {watch('roadNo')}&nbsp;</p>

                    {/* order items  */}
                    <div className="flex flex-col h-[246px] overflow-y-auto scrollbar-style ">
                        {
                            cart.length > 0 ? cart.map(food => (
                                <div key={food.id} className="grid grid-cols-3 input-bg p-[15px] mb-[10px] last:mb-0 rounded items-center ">
                                    <img className='w-[85px]' src={food.image} alt="food img" />
                                    <div className=''>
                                        <h6 className="text-[18px] font-medium mb-[10px]">{food.title}</h6>
                                        <p className="text-base text-gray-500">{food.foodType}</p>
                                    </div>
                                    <div className='flex flex-col mx-auto'>
                                        <div className="flex flex-col px-[5px] ml-1">
                                            
                                            <p className="text-[18px] text-rose-600 font-medium">${(food.price * food.quantity).toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <button className='p-[5px] border-none bg-transparent cursor-pointer' onClick={() => checkOutItemHandler(food.id, (food.quantity-1))}><BsDash /></button>
                                            <span className="p-[5px] bg-white w-[30px] flex justify-center">{food.quantity}</span>
                                            <button className='p-[5px] border-none bg-transparent cursor-pointer' onClick={() => checkOutItemHandler(food.id, (food.quantity+1))}><BsPlus /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : 
                            <div className='flex items-center justify-center h-full'>
                                <h2 className='text-primary text-xl py-4 '>You have not ordered any food yet !</h2>
                            </div>
                        }
                    </div>

                    <div className="flex flex-col mt-6 font-medium">
                        <p className="flex justify-between mb-[6px] "><span>Subtotal ({cart?.length}) items</span><span>${subTotal.toFixed(2)}</span></p>
                        <p className="flex justify-between mb-[6px]"><span>Tax (5%)</span><span>${tax.toFixed(2)}</span></p>
                        {cart?.length>0 ? 
                            <p className="flex justify-between mb-[6px]"><span>Delivery fee</span><span>$2.00</span></p>:
                            <p className="flex justify-between mb-[6px]"><span>Delivery fee</span><span>$0.00</span></p>
                        }
                        <p className="flex justify-between mb-[10px] text-xl"><span>Total</span><span>${grandTotal.toFixed(2)}</span></p>

                        {Object.keys(deliveryData).length !== 0 ?
                        <button className='py-[15px] border-none bg-primary text-white rounded cursor-pointer focus:outline-none disabled' onClick={() => { hideAll(); setShowPayment(true) }} disabled={Object.keys(deliveryData).length === 0}>Place Order</button>
                        :
                        <button className='py-[15px] border-none bg-gray-400  text-white rounded cursor-not-allowed focus:outline-none '>Place Order</button>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderReview;