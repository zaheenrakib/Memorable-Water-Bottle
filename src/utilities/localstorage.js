const getStoreCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLs = cart =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}

const addToLs = id => {
    const cart = getStoreCart();
    cart.push(id);
    //save to local storage
    saveCartToLs(cart)
}

export {addToLs , getStoreCart}