import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import TaskContext from '../../context/taskContext';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { BASE_URL, setUser } = useContext(TaskContext);
  

  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const user = { email, password };
    console.log(user)
    if (isSignup) {
      if (!name) {
        alert('Please enter name to continue');
        return;
      }
      user.name = name;

      axios.post(`${BASE_URL}/user/signup`, user)
        .then((response) => {
          const { result, token } = response.data;
          localStorage.setItem('Profile', JSON.stringify({ result, token }));
          setUser(result);
          navigate('/'); // redirect to home or dashboard
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    } else {
      axios.post(`${BASE_URL}/user/login`, user)
        .then((response) => {
          const { result, token } = response.data;
          localStorage.setItem('Profile', JSON.stringify({ result, token }));
          setUser(result);
          navigate('/'); // redirect to home or dashboard
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };

  return (
    <section className='auth-section'>
      <div className="auth-container-2">
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id='name'
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && <h4 style={{ color: "#007ac6", fontSize: "13px" }}>Forgot password?</h4>}
            </div>
            <input
              type="password"
              name='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className='auth-btn'>{isSignup ? 'Sign Up' : 'Sign In'}</button>
         
        </form>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
