import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    
    const handleSignOut = () => {
        signOutUser()
        .then(()=> {
            console.log('Signout Success')
        })
        .catch(error => console.log(error))
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/orders'>Orders</NavLink></li>
        {
            user && <li><NavLink to='/profile'>Profile</NavLink></li>
        }

    </>

    return (
        <div>
           <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Private Route</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? 
                        <>
                            <span>{user.email}</span>
                            <a onClick={handleSignOut} className='btn'>Sign Out</a>
                        
                        </> 
                        : <Link to='/login' className='btn'> Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;