import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import axios from 'axios';
import { getProfile } from '../Auth/UserFunctions';
import SavedTeam from './SavedTeams';
import SavedNews from './SavedItems';

const API = 'https://guarded-depths-49314.herokuapp.com';

function Saved() {
  const [team, setTeam] = useState([]);
  const [saved, setSaved] = useState([]);
  const [profile, setProfile] = useState({ first_name: '', last_name: '', email: '' });

  const fetchData = () => {
    axios.get(`${API}/getSaveNews`).then(r => setSaved(r.data)).catch(console.error);
    axios.get(`${API}/getSaveTeams`).then(r => setTeam(r.data)).catch(console.error);
  };

  useEffect(() => {
    fetchData();
    const token = localStorage.usertoken;
    if (token) {
      getProfile(token).then(res => {
        if (res) setProfile({ first_name: res.first_name, last_name: res.last_name, email: res.email });
      });
    }
  }, []);

  const handleDelete = title => {
    axios
      .post(`${API}/getSaveNews/delete`, title)
      .then(() => { alert('Item Deleted'); fetchData(); })
      .catch(err => console.error(err));
  };

  const handleDislike = name => {
    axios
      .post(`${API}/getSaveTeams/delete`, name)
      .then(() => { alert('Item Deleted'); fetchData(); })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Container>
        <div className="profile-jumbotron">
          <h1>MY PROFILE</h1>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr><td><strong>First Name</strong></td><td>{profile.first_name}</td></tr>
              <tr><td><strong>Last Name</strong></td><td>{profile.last_name}</td></tr>
              <tr><td><strong>Email</strong></td><td>{profile.email}</td></tr>
            </tbody>
          </table>
        </div>
      </Container>
      <Container className="content-section">
        <h1 className="page-title">Saved Teams</h1>
      </Container>
      <Container>
        <Row>
          {team.map((item, i) => (
            <SavedTeam key={item._id || i} item={item} onClick={handleDislike} />
          ))}
        </Row>
      </Container>
      <Container className="content-section">
        <h1 className="page-title">Saved Headlines</h1>
      </Container>
      <Container>
        <Row>
          {saved.map((item, i) => (
            <SavedNews key={item._id || i} item={item} onClick={handleDelete} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Saved;