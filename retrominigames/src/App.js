import titleimage from './title.png';
import './styles/App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';

function Home() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching data from the backend!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={titleimage} alt="Title" className="title" />
        <button 
          type="signup" 
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
        <button 
          type="login" 
          onClick={() => navigate('/login')}
        >
          Log In
        </button>
      </header>
      <h1>{message}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;