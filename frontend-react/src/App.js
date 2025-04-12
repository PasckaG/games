import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import AbtPage from './components/AbtPage';
import LogPage from './components/LogPage';
import StorePage from './components/StorePage';
import RegisterPage from './components/RegisterPage';
import Games from './Games';
import UserProfile from './components/UserProfile';
import ProfileCard from './components/ProfileCard';
import './Css/style.css';

function App() {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Game" element={<GamePage />} />
        <Route path="/AbtPage" element={<AbtPage />} />
        <Route path="/Login" element={<LogPage />} />
        <Route path="/StorePage" element={<StorePage />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Profiles" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
