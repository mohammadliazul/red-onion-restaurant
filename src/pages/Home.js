import React, { useState } from 'react';
import AboutUs from '../components/About/AboutUs';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import useFoodsData from '../hooks/useFoodsData';

function Home() {
    const [showAllFoods, setShowAllFoods] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);
    const [showFoodDetails, setShowFoodDetails] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showOrderComplete, setShowOrderComplete] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);

    const [deliveryData, setDeliveryData] = useState({});

    const [foodId, setFoodId] =useState();
    const [foods] = useFoodsData();
    const [menuTab, setMenuTab] = useState('Breakfast');

    const [cart , setCart] = useState([]);
    const [orderId] = useState(null);

    const hideAll = () => {
        setShowAllFoods(false);
        setShowFoodDetails(false);
        setShowCheckout(false);
        setShowPayment(false);
        setShowOrderComplete(false);
        setShowSearchResult(false);
    }



    // food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }


    // Fuction getFoodBy ID
    const getFoodById = id => {
        setFoodId(id);
        hideAll();
        setShowFoodDetails(true);
    }

    const goBack = () => {
        hideAll();
        setShowAllFoods(true);
    }

    //----------------- Cart ---------------------
    const clearCart =  () => {
      setCart([])
    }

    const cartHandler = (data) => {
      const alreadyAdded = cart.find(crt => crt.id === data.id );
      const newCart = [...cart,data]
      setCart(newCart);
      if(alreadyAdded){
        const reamingCarts = cart.filter(cart => cart.id !== data);
        setCart(reamingCarts);
      }else{
        const newCart = [...cart,data]
        setCart(newCart);
      }
     
    }

    const checkOutItemHandler = (productId, productQuantity) => {
      const newCart = cart.map(item => {
        if(item.id === productId){
            item.quantity = productQuantity;
        }
        return item;
      })

      const filteredCart = newCart.filter(item => item.quantity > 0)
      setCart(filteredCart)
    }

    return (
        <>
            <Header hideAll={hideAll} setShowCheckout={setShowCheckout} cart={cart}/>

            <Banner hideAll={hideAll}  setShowSearchResult={setShowSearchResult}/>
            
            <Main hideAll={hideAll} menuTab={menuTab} handleMenuTabs={handleMenuTabs} deliveryData={deliveryData} setDeliveryData={setDeliveryData} setMenuTab={setMenuTab} goBack={goBack} foods={foods} foodId={foodId} getFoodById={getFoodById} showAllFoods={showAllFoods} setShowAllFoods={setShowAllFoods} showCheckout={showCheckout} setShowCheckout={setShowCheckout} showFoodDetails={showFoodDetails} setShowFoodDetails={setShowFoodDetails} showPayment={showPayment} setShowPayment={setShowPayment} showOrderComplete={showOrderComplete} setShowOrderComplete={setShowOrderComplete} orderId={orderId}  cart={cart} cartHandler={cartHandler} clearCart={clearCart} checkOutItemHandler={checkOutItemHandler} showSearchResult={showSearchResult} setShowSearchResult={setShowSearchResult}/>

            <AboutUs/>
            <Footer/>
        </>
    );
}

export default Home;
