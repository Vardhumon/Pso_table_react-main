import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const container = document.getElementById('container');

  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    const handleRegisterClick = () => {
      container.classList.add('active');
    };

    const handleLoginClick = () => {
      container.classList.remove('active');
    };

    registerBtn.addEventListener('click', handleRegisterClick);
    loginBtn.addEventListener('click', handleLoginClick);

    return () => {
      registerBtn.removeEventListener('click', handleRegisterClick);
      loginBtn.removeEventListener('click', handleLoginClick);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      const { data } = response;
      if (data.error) {
        toast.error(data.error);
      } else {
        setEmail('');
        setPassword('');
        console.log('User logged in');
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async(e) => {
    e.preventDefault();
    const {name, email, password}= data
    try{
      const{data}= await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error)
      } else{
        setData({})
        toast.success("Login Successful. welcome")
        container.classList.remove('active');
      }
    }
    catch(error){
      console.log(error)

    }
  };

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form onSubmit={registerUser}>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" id="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} name='name'/>
          <input type="email" placeholder="Email" id="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} name='email'/>
          <input type="password" placeholder="Password" id="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} name='password'/>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Lecturer!</h1>
            <p>Login With Registered Email To Use PSO Mapping</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
