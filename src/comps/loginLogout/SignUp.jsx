import React, { useState, useEffect } from 'react';
import { fire } from '../../firebase/config';
import { db } from '../../firebase/config';
import Login from './Login';
import Logout from './Logout';
import './loginLogout.css'


const SignUp = ({setID, setModalState}) => {
    
    const users = db.collection('users')
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    } 
    
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    } 
    
    const handleStoreUser = (user) => {
        users.doc(user.user.uid).set({
            user_id: user.user.uid,
            email: user.user.email
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        // this works for Singup but maybe not login
        .then(user => {handleStoreUser(user)})
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };


    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {handleStoreUser(user)})
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if(user){   
                clearInputs();
                setID(user.uid);
                setUser(user.uid);

            }   
            else {
                setID(null);
                setUser(null);
            }
            setModalState(false);
        });
    };

    useEffect(()=> {
        authListener();
    }, []); 

    return (
        <div>
            {user ? (
                <Logout handleLogout={handleLogout} />   
            ) : (        
                <Login 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError} 
                />
            )}
        </div>
    );
};

export default SignUp
