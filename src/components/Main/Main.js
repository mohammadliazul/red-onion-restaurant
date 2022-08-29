import React from 'react';
import FoodDetails from '../Food Details/FoodDetails';
import Foods from '../Foods Showcase/Foods';
import OrderReview from '../Order Review/OrderReview';
import Payment from '../Payment/Payment';
import OrderComplete from '../Order Complete/OrderComplete';
import SearchResult from '../SearchResult/SearchResult';

const Main = ({handleMenuTabs, goBack, getFoodById,  foodId, cart, cartHandler,hideAll, showAllFoods, showFoodDetails, showCheckout, setShowCheckout,showPayment, setShowPayment,showOrderComplete, menuTab,  setShowOrderComplete, clearCart, checkOutItemHandler, orderId,deliveryData, setDeliveryData, showSearchResult}) => {

    return (
        <section>
            {/* menu tab  */}
            <div className='food-menu-tab my-12 max-w-screen-xl mx-auto px-6'>
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
            </div>

            {showSearchResult && <SearchResult getFoodById={getFoodById}/>}
            
            {showAllFoods && <Foods menuTab={menuTab} cart={cart} getFoodById={getFoodById} hideAll={hideAll} setShowCheckout={setShowCheckout} />}

            {showFoodDetails && <FoodDetails cartHandler={cartHandler} foodId={foodId}  goBack={goBack} />}

            {showCheckout && <OrderReview cart={cart} checkOutItemHandler={checkOutItemHandler} deliveryData={deliveryData} setDeliveryData={setDeliveryData} goBack={goBack} hideAll={hideAll} setShowPayment={setShowPayment} />}

            {showPayment && <Payment orderId={orderId} clearCart={clearCart} hideAll={hideAll} goBack={goBack} data={deliveryData} setShowOrderComplete={setShowOrderComplete} />}

            {showOrderComplete && <OrderComplete orderId={orderId} hideAll={hideAll} data={deliveryData} setShowCheckout={setShowCheckout} />}

            
        </section>
    );
};

export default Main;