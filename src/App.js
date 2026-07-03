import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';

function App() {

const navigate = useNavigate()

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user)=>{
    if(!user){
      navigate('/login');
    }
  });
  return unsubscribe;
},[navigate])

  return (
    <div>
      <ToastContainer theme= 'dark' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
