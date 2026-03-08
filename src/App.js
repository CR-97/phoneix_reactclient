import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AppNavBar from './components/NavBar/NavBar';
import AppFooter from './components/Footer';
import Home from './components/Home/Home';
import Match from './components/Matches/Matches';
import Profile from './components/Profile/Saved';
import Search from './components/Search/Search';
import Team from './components/Team/Team';
import Standing from './components/Standing/Standing';
import Scorer from './components/Scorer/Scorer';

const API = 'https://guarded-depths-49314.herokuapp.com';

function App() {
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [news3, setNews3] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get(`${API}/getNews1`).then(r => setNews1(r.data.articles || [])).catch(() => {});
    axios.get(`${API}/getNews2`).then(r => setNews2(r.data.articles || [])).catch(() => {});
    axios.get(`${API}/getNews3`).then(r => setNews3(r.data.articles || [])).catch(() => {});
    axios.get(`${API}/getMatches`).then(r => setMatches(r.data.matches || [])).catch(() => {});
  }, []);

  function handleSubmit(newsData) {
    axios
      .post(`${API}/getSaveNews/add`, newsData)
      .then(() => alert('Saved'))
      .catch(err => alert(err));
  }

  return (
    <Router>
      <div id="page">
        <AppNavBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Home
                item={news1}
                item2={news2}
                item3={news3}
                onClick={handleSubmit}
              />
            }
          />
          <Route path="/matches" element={<Match item={matches} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/team" element={<Team />} />
          <Route path="/standings" element={<Standing />} />
          <Route path="/scorer" element={<Scorer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;