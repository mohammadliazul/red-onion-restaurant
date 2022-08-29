import React, { useState } from 'react';
import { useEffect } from 'react';
import useFoodsData from '../../hooks/useFoodsData';
import FoodItem from './FoodItem';
import SkeletonLoader from './SkeletonLoader';

const Foods = ({menuTab,getFoodById,hideAll,setShowCheckout,cart}) => {

    const [loading, setLoading] = useState(false);
    const [foods]=useFoodsData();

    // SkeletonLoader loading
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000);
    },[])


    return (
        <section className='food-menu-tab my-12 max-w-screen-xl mx-auto px-6'>
            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.foodType).map(item => (
                    loading ? <SkeletonLoader key={item.id} /> : <FoodItem key={item.id} {...item} getFoodById={getFoodById}  />
                ))}
            </div>

            {/* Checkout Your Food button  */}
            <div className="text-center text-white mt-14">
                    {
                        cart.length ? 
                        <button onClick={() => { hideAll(); setShowCheckout(true) }} className="rounded bg-primary px-6 py-2 cursor-pointer">Checkout Your Food</button>
                        :
                        <button disabled className="rounded bg-gray-400 px-4 py-2 cursor-not-allowed">Checkout Your Food</button>
                    }
            </div>
        </section>
    );
};

export default Foods;