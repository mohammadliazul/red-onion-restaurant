import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import useFoodsData from '../../hooks/useFoodsData';
import swal from 'sweetalert';
import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import { FaCartPlus } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const FoodDetails = ({foodId,goBack, cartHandler}) => {
    const {user}=useAuth();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1)
    const [foods] = useFoodsData();
    const finalCartHandler = (currentFood) => {
        currentFood.quantity = quantity;
        cartHandler(currentFood);
        // setIsSuccess(true);
    }

    return (
        <main className="max-w-screen-xl mx-auto px-6 my-16">

            {/* go back  */}
            <span onClick={goBack}><ArrowSmLeftIcon className='h-6 transition duration-300 hover:text-rose-500 cursor-pointer'/></span>

            {/* food details  */}
            {foods?.filter(item => item.id === foodId)?.map((food) => (
                <div key={food.id} className="flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

                        {/* left side  */}
                        <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                            <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">{food.title}</h1>
                            <p className="text-center md:text-left lg:text-left text-base poppins text-gray-500 leading-relaxed select-none">{food.description}</p>

                            {/* price and quantity  */}
                            <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
                                {/* price  */}
                                <div className='h-12 w-28 border-none inline-flex items-center'>
                                    <span className="text-3xl font-medium text-black poppins select-none">${food.price}</span>
                                </div>

                                {/* increment decrement quantity */}
                                <div className="flex items-center border border-gray-200 px-4 py-2  rounded-full">
                                    <BsDash onClick={() => {
                                        quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
                                    }}
                                        className="text-2xl text-gray-800 w-8 h-8 hover:text-rose-600 transform transition duration-500 cursor-pointer p-1"
                                    />
                                    
                                    <div className='w-10 border-none inline-flex items-center justify-center'>
                                        <span className='text-lg font-medium text-gray-800 poppins select-none focus:outline-none'>{quantity}</span>
                                    </div>

                                    <BsPlus onClick={() => {
                                        setQuantity(quantity + 1);
                                    }}
                                        className="text-2xl text-gray-800 w-8 h-8 hover:text-rose-600 transform transition duration-500 cursor-pointer p-1"
                                    />
                                </div>
                            </div>

                            {/* add button  */}
                            <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
                                {user?.email ?
                                <button className="flex items-center space-x-3 bg-primary px-6 py-3 text-white poppins rounded-full focus:outline-none transform transition duration-700 hover:scale-105" onClick={() => {
                                    finalCartHandler(food);
                                    goBack();
                                    swal("Wow!!!", "Your order has added to the cart", "success")
                                }}>
                                    <FaCartPlus className="h-[20px] text-xl pr-1" />
                                    Add to Cart
                                </button>
                                : navigate('/login')}
                            </div>

                        </div>
                        {/* right side  */}
                        <div className="order-1 md:order-2 lg:order-2">
                            <img src={food.image} className="w-3/4 md:w-3/4 lg:w-full mx-auto" alt="food" />
                        </div>
                    </div>
                </div>
            ))}

        </main>
    )
}

export default FoodDetails;