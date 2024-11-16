import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Register = () => {

    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [] = useState()

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        console.log(email)
        console.log(password) 
        console.log(terms)
        console.log("Register me please!") 

        // reset state
        setErrorMsg('')
        setSuccess(false)

        if(password.length < 6){
            setErrorMsg('Password should be 6 characters or longer')
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordRegex.test(password)){
            setErrorMsg('Password should be at least one uppercase, one lowercase, one number & one special character')
            return; 
        }

        if(!terms){
            setErrorMsg('Accept Our Terms & Conditions')
            return
        }
        
        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setSuccess(true)

            // send verification email
            sendEmailVerification(auth.currentUser)
            .then(() =>{
                console.log('Email sent')
            })

            // update user
            const profile = {
                displayName: name,
                //photoUrl : photoUrl
            }

            updateProfile(auth.currentUser, profile)
            .then(() => {
                console.log('User profile updated')
            })
            .catch((error) => {
                console.log(error)
            })

        })
        .catch(error => {
            console.log(error)
            setErrorMsg(error.message)
            setSuccess(false)
        })
    }
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl my-8">Register</h2>
      <form onSubmit={handleRegister}>
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

            <p onClick={() => setShowPass(!showPass)} className="btn btn-xs">
                {
                    showPass ? <FaEye /> : <FaEyeSlash />
                } 
                </p>
        </label>
            <label className="flex gap-4 mt-5 cursor-pointer">
            <input type="checkbox" name="terms" className="checkbox"/> 
            <p className="">Accept Our Terms And Conditions</p>
        </label>
        <div className="form-control mt-6">
          <button className="btn btn-accent text-base">Register</button>
        </div>
      </form>
      {
        errorMsg && <p className="text-red-600 mt-4">{errorMsg}</p>
      }
      {
        success && <p className="text-green-600 mt-4 font-medium text-center">Registration Successful</p>
      }
      <p className='mt-4'>Already have an account? <Link to='/login' className='ml-4 text-blue-600'>Login</Link></p>
    </div>
  );
};

export default Register;
