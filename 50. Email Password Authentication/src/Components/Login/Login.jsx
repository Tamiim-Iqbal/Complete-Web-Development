import React, { useRef, useState } from 'react';
import {sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase.init';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const emailRef = useRef();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email)
        // console.log(password) 

        setErrorMsg('')
        setSuccess(false)

        // login
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            if(!result.user.emailVerified)
            {
                setErrorMsg('Please verify your email address')
            }
            else
            {
                setSuccess(true)
            }
            
        })
        .catch(error => {
            // console.log(error.message)
            setErrorMsg(error.message)
            setSuccess(false)
        })
    }
 
    const handleForgetPass = () => {
        // console.log(emailRef.current.value)
        const email = emailRef.current.value
        if (!email){
            console.log("provide a valid email")
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(()=> {
                alert('Password Reset Email Sent')
            })
        }
    }


    return (
        <div className="hero-content flex-col mt-10">
        <div className="text-center">
        <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">

            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
            <p onClick={() => setShowPass(!showPass)} className="btn btn-xs absolute mt-12 ml-64">
                {
                    showPass ? <FaEye /> : <FaEyeSlash />
                } 
                </p>
            <label onClick={handleForgetPass} className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            </div>

            <div  className="form-control mt-6">
            <button  className="btn btn-primary">Login</button>
            </div>
        </form>
        <div className='mb-5'>
        {
            errorMsg && <p className="text-red-600 text-center mb-4">{errorMsg}</p>
            }
            {
            success && <p className="text-green-600 font-medium text-center mb-3">Login Successful</p>
            }
            <p className='ml-9'>New user? <Link to='/register' className='ml-4 text-blue-600'>Register</Link></p>
        </div>

        </div>
        </div>
    );
};

export default Login;