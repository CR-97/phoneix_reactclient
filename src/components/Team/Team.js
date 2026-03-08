import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import axios from 'axios';
import T1 from './T1';
import T2 from './T2';
import T3 from './T3';
import T4 from './T4';
import T5 from './T5';
import T6 from './T6';

const API = 'https://guarded-depths-49314.herokuapp.com';

function Team() {
  const [teams, setTeams] = useState({ premier: [], uefa: [], ligue1: [], bunde: [], seriesA: [], laliga: [] });

  useEffect(() => {
    const endpoints = [
      { key: 'uefa', code: 2001 },
      { key: 'bunde', code: 2002 },
      { key: 'laliga', code: 2014 },
      { key: 'ligue1', code: 2015 },
      { key: 'seriesA', code: 2019 },
      { key: 'premier', code: 2021 },
    ];
    endpoints.forEach(({ key, code }) => {
      axios
        .get(`${API}/getTeam/${code}`)
        .then(r => setTeams(prev => ({ ...prev, [key]: r.data })))
        .catch(() => {});
    });
  }, []);

  const handleLike = likeData => {
    axios
      .post(`${API}/getSaveTeams/add`, likeData)
      .then(() => alert('Saved'))
      .catch(() => {});
  };

  const sections = [
    { label: 'European Championship', data: teams.uefa, Component: T1 },
    { label: 'BundesLiga', data: teams.bunde, Component: T2 },
    { label: 'La Liga', data: teams.laliga, Component: T3 },
    { label: 'Ligue 1', data: teams.ligue1, Component: T4 },
    { label: 'Premier League', data: teams.premier, Component: T5 },
    { label: 'Serie A', data: teams.seriesA, Component: T6 },
  ];

  return (
    <div>
      <Container>
        <h1 className="page-title">Teams</h1>
      </Container>
      {sections.map(({ label, data, Component }) => (
        <Container key={label}>
          <h2 className="mt-4 mb-3" style={{ color: 'rgb(44,56,85)' }}>{label}</h2>
          <Row>
            {data.map((item, i) => (
              <Component key={item.id || i} item={item} onClick={handleLike} />
            ))}
          </Row>
        </Container>
      ))}
      <br /><br />
    </div>
  );
}

export default Team;
