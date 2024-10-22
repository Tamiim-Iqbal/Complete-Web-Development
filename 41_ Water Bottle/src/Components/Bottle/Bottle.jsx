import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h4>Price : ${price}</h4>
            <button className='btn-buy' onClick={() => handleAddToCart(bottle)}>Purchase</button>
            
        </div>
    );
};

export default Bottle;