import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function Landing() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      const decoded = jwtDecode(token);
      setFirstName(decoded.first_name || '');
      setLastName(decoded.last_name || '');
    }
  }, []);

  return (
    <div className="hero-jumbotron">
      <h1>Welcome Back, {firstName} {lastName}! ⚽</h1>
      <p>Stay updated with the latest football news, standings, and match results.</p>
    </div>
  );
}

export default Landing;