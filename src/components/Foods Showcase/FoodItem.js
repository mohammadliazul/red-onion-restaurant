import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({id,image, title, subtitle, description, price, foodType}) => {

    const navigate = useNavigate();
    const handleRoute=()=>{
        navigate(`/foods/${title}`)
    }

    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            {/* <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{foodType}</span> */}
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={image} alt={title} />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-xl font-medium">{title}</h1>
                <p className="text-gray-400 poppins text-sm text-center">{subtitle}</p>
                <h2 className="text-gray-900 poppins text-xl font-semibold">${price}</h2>
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Order Now</button>
            </div>
        </div>
    );
};

export default FoodItem;