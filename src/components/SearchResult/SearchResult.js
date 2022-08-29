import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFoodsData from '../../hooks/useFoodsData';
import SkeletonLoader from '../Foods Showcase/SkeletonLoader';


const SearchResult = ({getFoodById}) => {

    const {searchQuery} = useParams();
    const [foods] = useFoodsData();
    const searchResult = foods.filter(food => food.title.toLowerCase().includes(searchQuery));
    // console.log(searchQuery, searchResult);

    const [loading, setLoading] = useState(false);

    // SkeletonLoader loading
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000);
    },[])

    const handleClick=(id)=>{
        getFoodById(id);
    }

    return (
        <section>
            <div className='max-w-screen-xl mx-auto px-6'>
                <div className='text-center'>
                    <h3 className='active text-black nav-link after:w-[70px] after:h-[2px]'>Search Result</h3>
                </div>

                {   
                    searchResult?.length === 0  && <h6 className="text-center text-primary py-8 mt-7">No food found!</h6>
                }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {
                    searchResult?.map(food =>
                        loading ? <SkeletonLoader key={food.id} /> :
                        <>
                            <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                                <img className="w-64 mx-auto transform transition duration-500 hover:scale-105" src={food.image} alt={food.title} />
                                <div className="flex flex-col items-center my-3 space-y-2">
                                    <h1 className="text-gray-900 poppins text-xl font-medium">{food.title}</h1>
                                    <p className="text-gray-400 poppins text-sm text-center">{food.subtitle}</p>
                                    <h2 className="text-gray-900 poppins text-xl font-semibold">${food.price}</h2>
                                    <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-500 hover:scale-105 cursor-pointer" onClick={()=>{handleClick(food.id)}}>Order Now</button>
                                </div>
                            </div>
                        </>
                    )
                }
                </div>

                <div className='text-center mt-10'>
                    <a href='/' className="rounded bg-primary px-4 py-2 cursor-pointer text-white">See Our All Foods</a>
                </div>
            </div>
        </section>
    );
};

export default SearchResult;