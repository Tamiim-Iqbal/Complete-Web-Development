import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setBottles(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        if(bottles.length)
        {
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles);

            const savedBottle = [];
            for(const id of storedCart){
                // console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle){
                    savedBottle.push(bottle)
                }
            }
            // console.log('Saved Bottle :', savedBottle);
            setCart(savedBottle);
        }
    }, [bottles])
    

    const handleAddToCart = bottle => {
        // console.log("bottle going to be added");
        // console.log(bottle);
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // remove from LS
        removeFromLocalStorage(id);
    }

    return (
        <div>
            {/* <h3>Bottles Here</h3> */}
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottles-grid">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;