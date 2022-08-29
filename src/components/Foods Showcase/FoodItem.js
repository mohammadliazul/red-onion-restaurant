import React from 'react';
// import { useNavigate } from 'react-router-dom';

const FoodItem = ({id,image, title, subtitle, price, foodType, getFoodById}) => {

    // const navigate = useNavigate();
    const handleClick=()=>{
        getFoodById(id);
        // navigate(`/foods/${title}`);
    }

    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <img className="w-64 mx-auto transform transition duration-500 hover:scale-105" src={image} alt={title} />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-xl font-medium">{title}</h1>
                <p className="text-gray-400 poppins text-sm text-center">{subtitle}</p>
                <h2 className="text-gray-900 poppins text-xl font-semibold">${price}</h2>
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-500 hover:scale-105 cursor-pointer" onClick={handleClick}>Order Now</button>
            </div>
        </div>
    );
};

export default FoodItem;