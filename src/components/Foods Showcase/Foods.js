import React, { useState } from 'react';
import { useEffect } from 'react';
import useFoodsData from '../../hooks/useFoodsData';
import FoodItem from './FoodItem';
import SkeletonLoader from './SkeletonLoader';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Breakfast');
    const [loading, setLoading] = useState(false);
    const [foods]=useFoodsData();

    // food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    // SkeletonLoader loading
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000);
    },[])


    return (
        <section className='food-menu-tab my-12 max-w-screen-xl mx-auto px-6'>

            {/* food menu tab  */}
            <nav>
                <ul className="flex flex-wrap justify-center">
                    <li className="nav-item">
                        <span className={menuTab === 'Breakfast' ? "active nav-link" : "nav-link "} onClick={() => handleMenuTabs('Breakfast')}>Breakfast</span>
                    </li>
                    <li className="nav-item">
                        <span className={menuTab === 'Lunch' ? "active nav-link link-underline" : "nav-link link link-underline link-underline-black"} onClick={() => handleMenuTabs('Lunch')}>Lunch</span>
                    </li>
                    <li className="nav-item">
                        <span className={menuTab === 'Dinner' ? "active nav-link" : "nav-link "} onClick={() => handleMenuTabs('Dinner')}>Dinner</span>
                    </li>
                </ul>
            </nav>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.foodType).map(item => (
                    loading ? <SkeletonLoader key={item.id} /> : <FoodItem key={item.id} {...item}  />
                ))}
            </div>

            <div className="text-center text-white mt-14">
                    {/* {
                        props.cart.length ? 
                        <a href="/checkout">
                            <button disabled className="rounded bg-rose-600 px-6 py-2 cursor-pointer">Checkout Your Food</button>
                        </a>
                        : */}
                        <button disabled className="rounded bg-gray-400 px-4 py-2 cursor-not-allowed">Checkout Your Food</button>
                    {/* } */}
            </div>
        </section>
    );
};

export default Foods;