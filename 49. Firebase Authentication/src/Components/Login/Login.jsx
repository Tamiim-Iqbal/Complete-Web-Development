import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, GithubAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error)
            setUser(null)
        })
    }

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            console.log("Sign-out successful")
            setUser(null)
            })
        .catch((error) => {
            console.log(error)
            });
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log(result)
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error)
            setUser(null)
        })
    }

    return (
        <div>
            {
                user ?
                <button onClick={handleGoogleSignOut} style={{'marginTop' : '20px'}}>Sign Out</button> 
                : 
                <>
                    <button onClick={handleGoogleSignIn} style={{'marginTop' : '20px', 'marginRight': '20px'}}>Login with Google</button>
                    <button onClick={handleGithubSignIn} style={{'marginTop' : '20px'}}>Login with Github</button>
                </>
                
            }
            { 
                user && <div>
                    <h2>User : </h2>
                    <h3>{user.displayName}</h3> 
                </div>}
  
            
        </div>
    );
};

export default Login;