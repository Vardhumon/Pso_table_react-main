import './app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import AppPso from '../App';
// Update the baseURL to point to your backend server
axios.defaults.baseURL = "http://localhost:8000"; // Assuming your backend is running on port 8000
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
      <Route path='/' element={<Login />} />
      <Route path='/table' element={<AppPso />} />

      </Routes>
    </Router>
  );
}

export default App;
