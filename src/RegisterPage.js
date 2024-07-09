import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState, useRef } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase';
import { useNavigate } from 'react-router';
import emailjs from '@emailjs/browser';

const RegisterPage = () => {
    const Navigate = useNavigate();
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
  
    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            console.log(userCredential);
            setEmail("")
            setPassword("")
            Navigate("/LoginPage")
          })
         .catch((error) => {
            console.log(error);
          });
      };
    
    const validateForm = () => {
      let formErrors = {};
    
      // Validate name
      if (!name.trim()) {
        formErrors.name = 'Name is required';
      }
    
      // Validate email
      if (!email.trim()) {
        formErrors.email = 'Email is required';
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        formErrors.email = 'Invalid email address';
      }
    
      // Validate password
      if (!password.trim()) {
        formErrors.password = 'Password is required';
      } else if (password.length < 8) {
        formErrors.password = 'Password must be at least 8 characters long';
      }
    
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Handle form submission
        console.log('Form submitted:', { name, email, password });
      }
    };
    
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Handle form submission
        console.log('Form submitted:', { name, email, password });
    
        emailjs
          .sendForm('service_dc7rq6n', 'template_gtg70bg', form.current, {
            publicKey: 'fTM82r-6slFehg4rD',
          })
          .then(
            (result) => {
              console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
      }
    };

  return (
    <div>
      <form ref={form} onSubmit={signUp} className="registration-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            name="username"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default RegisterPage;
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import React, { useState } from 'react'
// import auth from './Firebase'
// import { getAuth } from "firebase/auth";

// const Rigesterpage = () => {
// const [email , setEmail]  = useState("")
// const [password , setpassword]  = useState("")

//     const SingUp = (e) => {
//         e.preventDefault()
//         createUserWithEmailAndPassword(auth , email ,password ) 
//             .then((userCredential) => {
//                 console.log(userCredential)
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                     })
//                     }
//   return (

//     <div>
//         <from onSubmit={SingUp}>
//         <h1>Create Account</h1>
//         <input
//         type='Email'
//         placeholder='Enter Your Email'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         >
//         </input>
//         <input
//         type='Password'
//         placeholder='Enter Your Password'
//         value={password}
//         onChange={(e) => setpassword(e.target.value)}
//         >
//         </input>
//         <button type='submit'>Sign Up</button>
//         </from>
//     </div>
//   )
//   }
//   export default Rigesterpage;
