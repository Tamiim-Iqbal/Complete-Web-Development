import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-300 rounded-md p-4 text-black flex flex-col '>
            <h2 className='text-center'>
                <span className='text-5xl font-semibold '>{price}</span>
                <span className='text-xl '>/month</span>
            </h2>
            <h4 className='text-3xl font-medium text-center'>{name}</h4>
            <h5 className='mt-3 text-xl font-medium'>Features : </h5>
            <div className='pl-5 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-6 bg-green-500 w-full py-2 font-medium rounded-lg hover:bg-green-600'>Buy Now</button>
        </div>
    );
};

PriceOption.prototypes = {
    option: PropTypes.object.isRequired
    }
export default PriceOption;