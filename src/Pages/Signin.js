import React, { useRef, useState, handleClick, apes } from 'react'
import { auth } from '../firebase';
import './SignIn.css'

  
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    var err;
        
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
            }).catch(err => {
 
 alert(err.message  );
            })
    
    }
    return (
        <div className="body">
        <div className="signin">
             <form action="">
                <h1 className="head">Sign in to Suaypay </h1>
                <input ref={emailRef} type="email" placeholder="email" />
                <input ref={passwordRef} type="password" placeholder= "password" />
                <button onClick={signIn}>Sign in </button>
                <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
<h2>{err} </h2>
            </form> 
            </div>
        </div>
    )
}

export default Signin