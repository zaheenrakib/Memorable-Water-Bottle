import './Bottle.css'

const Bottle = ({bottle,handleAddTocart}) => {
    const {name,img,price} = bottle;
    // console.log(bottle);
    return (
        <div className="bottle">
            <h3>Bottle: {name} </h3>
            <img src={img} alt="" />
            <p>Price $ {price}</p>
            <button onClick={() => handleAddTocart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;