import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Banner({setShowSearchResult,hideAll}) {

    const [searchQuery , setSearchQuery] = useState(null);
    const getQuery = e => {
        setSearchQuery(e.target.value);
    }
    
    // const navigate = useNavigate();

    // const handleKeyDown = (e) => {
    //     e.preventDefault();
    //     // it triggers by pressing the enter key
    //     if (e.key === 'Enter') {
    //         navigate({"/search=":searchQuery})
    //         window.scrollBy(0, 500);
    //         hideAll();
    //         setShowSearchResult(true);
    //     }
    // }


    // const handleSearch = () => {
    //     // e.preventDefault();
    //     window.scrollBy(0, 500);
    //     hideAll();
    //     setShowSearchResult(true);
    //     // it triggers by pressing the enter key
    //     // if (e.key === 'Enter') {
    //     // }
    // }
    // // console.log(searchQuery);


    return (
        <section className="banner">
            <div className="px-6 md:px-0 flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl px-0 sm:px-4 poppins font-semibold text-gray-700 text-center">
                    Best food waiting for your belly
                </h1>

                <div className="rounded-full box-border mt-8 bg-white overflow-hidden flex items-center  sm:w-96 md:w-96 lg:w-96 xl:w-1/3 2xl:w-1/4">
                    <input
                        onChange={getQuery}
                        className="rounded-full px-4 w-full bg-transparent focus:outline-none text-gray-700"
                        type="text"
                        name="search-input"
                        placeholder="Search food items"
                    />
                    <Link to={"/search="+searchQuery}>
                    <button 
                    onClick={() => {
                        window.scrollBy(0, 500);
                        hideAll();
                        setShowSearchResult(true);
                    }}
                        type="submit"
                        className="bg-primary rounded-full poppins  text-white py-3 px-6"
                    >
                        Search
                    </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default Banner;
