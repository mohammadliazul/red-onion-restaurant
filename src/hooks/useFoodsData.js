import { useEffect, useState } from 'react';

const useFoodsData = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('./foodsData.json')
            .then(res => res.json())
            .then(data => setFoods(data))   
    }, [])
    return [foods,setFoods]
};

export default useFoodsData;