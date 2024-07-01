
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app); //import getAuth. getAuth is possible to put in the end of the FirebaseError.init.js file 
    
    // console.log(app); //if there is any error then use it to see if the app is importing/working properly
    
    
    const googleProvider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider;


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result);
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error('Error during sign-in:', error.message);
            });
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                // console.log(result);
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error('Error during sign-in:', error.message);
            });
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
            console.log(error);
            })
    }
    return ( 
        <div>
            {
                //ternary operator 
                user ?
                <button className="bg-green-400 text-red-500" onClick={handleSignOut}>Sign Out</button> :
                    <div><button className="btn btn-accent" onClick={handleGoogleSignIn}>Google LogIn</button>
                        <button onClick={handleGitHubSignIn}>GitHub Login</button>
                    </div>
            }
            

            {
                user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img className="m-auto" src={user.photoURL} alt="" />
                </div>
            }
                
        </div>
    );
};

export default Login;