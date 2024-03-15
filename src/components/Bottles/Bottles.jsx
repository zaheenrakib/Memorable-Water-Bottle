import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoreCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    //load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if (bottles.length) {
            const storedCart = getStoreCart();
            console.log(storedCart);
            const saveCart = []
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id ===id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }

            console.log(saveCart);
            setCart(saveCart);


        }
    }, [bottles])


    const handleAddTocart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }

    const handleRemoveFromCart = id => {
        //visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // remove from store LS
        removeFromLS(id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length} </h2>
            <Cart  handleRemoveFromCart={handleRemoveFromCart} cart ={cart} ></Cart>
            <h4>Cart: {cart.length} </h4>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddTocart={handleAddTocart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;