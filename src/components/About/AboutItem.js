import React, { useState } from 'react';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

const AboutItem = ({ id, image, icon, title, description}) => {
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);

    const showMore = () => {
        // console.log("Show More");
        setDescriptionCollapse(true);
    }
    const showLess = () => {
        // console.log("Show less");
        setDescriptionCollapse(false);
    }

    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl">

            {/* image  */}
            <div className="overflow-hidden rounded-2xl flex flex-grow">
                <img className="transform transition duration-700 hover:scale-125" src={image} alt={title} />
            </div>

            {/* other info  */}
            <div className="flex p-6 ">
                <div className="flex">
                    {/* icon  */}
                    <img src={icon} alt={title} className="h-10 mr-2"/>
                    {/* description  */}
                    <div>
                        <h1 className="text-xl text-gray-800 poppins">{title}</h1>
                        <p className="text-sm text-gray-500 poppins"> 
                            {
                                descriptionCollapse ? description : description.substr(0,100)
                            }
                        </p>
                        {
                            descriptionCollapse? 
                            <span onClick={showLess} className="flex items-center text-blue-500 cursor-pointer">See Less <ArrowCircleLeftIcon className="text-green-500 h-6 w-auto ml-3"/></span>
                            :
                            <span onClick={showMore} className="flex items-center text-blue-500 collapse-btn">See More
                            <ArrowCircleRightIcon className="text-green-500 h-6 w-auto ml-3"/></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutItem