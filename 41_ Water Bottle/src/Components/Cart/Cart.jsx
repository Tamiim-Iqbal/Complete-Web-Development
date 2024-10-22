import PropTypes from 'prop-types';

import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4 className="bottles">Cart : {cart.length} Bottles</h4>
            <h5>Saved Bottles</h5>
            <div className='cart-container'>
                {
                    cart.map(bottle => 
                    <div className='cart'>
                        <img src={bottle.img}></img>
                        <button onClick={() => handleRemoveFromCart(bottle.id)} className='btn-x'>x</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromLocalStorage: PropTypes.func.isRequired
}
export default Cart;