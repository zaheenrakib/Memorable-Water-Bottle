
const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
           <h4>Cart: {cart.length} </h4>
          <div className="cart-container">
            {cart.map(bottle => <img src={bottle.img}></img>)}
          </div>
        </div>
    );
};

export default Cart;