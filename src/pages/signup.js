import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth,firestore }from "../components/firebase-config" ;
import { useNavigate, Link } from 'react-router-dom';
import '../styles/forms.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const register = async (e) => {
    e.preventDefault();
    setError('');

    if (validatePassword()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (user) {
          await sendEmailVerification(auth.currentUser);
          await firestore.collection('users').doc(user.uid).set({
            email: user.email,
          });
          setError('A verification email has been sent. Please verify your email before logging in.');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate("/login")
        } else {
          setError('Failed to create user');
        }
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('Password validation failed');
    }
  };

  return (
    <div className="MainCard">
      <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
      <div className="Card">
        <h1>Sign Up</h1>
      
        <form onSubmit={register} name="registration_form">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            value={confirmPassword}
            required
            type="password"
            name="repeat"
            placeholder="Repeat password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="acc" type="submit">
            Create an account
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
        {error && <h6>{error}</h6>}
      </div>
    </div>
  );
}

export default Signup;
