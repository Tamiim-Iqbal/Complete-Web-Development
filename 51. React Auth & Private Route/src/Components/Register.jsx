import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate('/')

        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="w-11/12 mx-auto hero-content flex-col mt-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Register now!</h1>
            </div>
            
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                <form onSubmit={handleRegister} className="card-body">

                <label className="input input-bordered flex items-center gap-2 mb-5">
                <div className="text-gray-600 text-sm">
                <FaUser />
                </div>
                <input type="text" name="name" className="grow" placeholder="Name" required/>
                </label>

                <label className="input input-bordered flex items-center gap-2 mb-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" name="email" className="grow" placeholder="Email" required/>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                    />
                </svg>
                <input 
                    type={showPass ? 'text' : 'password'} 
                    className="grow" 
                    placeholder="Password" 
                    name="password" />

                    <p onClick={() => setShowPass(!showPass)} className="btn btn-xs p-0">
                        {
                            showPass ? <FaEye /> : <FaEyeSlash />
                        } 
                        </p>
                </label>

                <div  className="form-control mt-6">
                <button className="btn btn-accent text-base">Register</button>
                </div>
                
                </form>

                <div className='mb-5'>
                    {/* {
                        errorMsg && <p className="text-red-600 text-center mb-4">{errorMsg}</p>
                    }
                    {
                        success && <p className="text-green-600 font-medium text-center mb-3">Login Successful</p>
                    } */}
                    <p className='ml-8'>Already have an account? <Link to='/login' className='ml-4 text-blue-700'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;