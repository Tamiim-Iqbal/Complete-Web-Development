import './Sunglass.css'
// import add from '../Calculate';
import { add } from '../Calculate';

const Sunglass = () => {

    const first = 55;
    const second = 199;
    const sum = add(first, second)
    console.log(sum);

    return (
        <div>
            
        </div>
    );
};

export default Sunglass;