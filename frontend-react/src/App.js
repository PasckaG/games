import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';
import AbtPage from './components/AbtPage';
import ShopPage from './components/ShopPage';
import LogPage from './components/LogPage';
import GameBar from './components/GameBar';
import Profile from './components/ProfileCard'
import GameList from './Games'
import objs from "./Data/data";
import Games from "./Games";
import './Css/style.css';
import ProfileCard from './components/ProfileCard';


function App() {
  const isLoggedIn = !!localStorage.getItem('user');

  const cate = ['All','Open World', 'Adventure','Rpg','Racing']
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/Shop" element={<ShopPage />} />
        <Route path="/AbtPage" element={<AbtPage />} />
        <Route path='/login' element={<LogPage />} />
        <Route path='/GameBar' element={<GameBar />} />
        <Route path='/Games' element={<Games />} />
        <Route path='/Games' element={<Games />} />
        <Route path='/Profile' element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
