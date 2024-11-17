import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onAuthStateChanged(auth, (currentUser=> {
    //     if(currentUser){
    //         console.log('Currently logged user', currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged in')
    //         setUser(null)
    //     }
    // }))

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe();     // clean up
        }
    }, [])

    const authInfo = { 
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;