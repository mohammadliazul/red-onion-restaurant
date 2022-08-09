import React from 'react';

function Banner() {
    return (
        <section className="banner">
            <div className="px-6 md:px-0 flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl px-0 sm:px-4 poppins font-semibold text-gray-700 text-center">
                    Best food waiting for your belly
                </h1>

                <div className="rounded-full box-border mt-8 bg-white overflow-hidden flex items-center  sm:w-96 md:w-96 lg:w-96 xl:w-1/3 2xl:w-1/4">
                    <input
                        className="rounded-full px-4 w-full bg-transparent focus:outline-none text-gray-700"
                        type="text"
                        name="search-input"
                        placeholder="Search food items"
                    />
                    <button
                        type="submit"
                        className="bg-primary rounded-full poppins  text-white py-3 px-6"
                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Banner;
