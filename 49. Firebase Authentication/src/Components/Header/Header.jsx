import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to='/' style={{'marginRight' : '20px'}}>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;