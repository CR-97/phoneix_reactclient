import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import Content from './HomeItems';
import Content2 from './HomeItems2';
import Content3 from './HomeItems3';
import Landing from './Landing';

function Home({ item = [], item2 = [], item3 = [], onClick }) {
  const res = item.map((article, i) => (
    <Content key={article.url || i} item={article} onClick={onClick} />
  ));
  const res2 = item2.map((article, i) => (
    <Content2 key={article.url || i} item2={article} onClick={onClick} />
  ));
  const res3 = item3.map((article, i) => (
    <Content3 key={article.url || i} item3={article} onClick={onClick} />
  ));

  const loginRegLink = (
    <div className="hero-jumbotron">
      <h1>WELCOME TO PHONEIX FOOTBALL</h1>
      <p>Your ultimate football companion – news, standings, scores and more.</p>
      <h3>Please register or login to explore all features</h3>
      <div className="hero-actions">
        <Link to="/login" className="btn btn-light">Sign In</Link>
        <Link to="/register" className="btn btn-outline-light">Register</Link>
      </div>
    </div>
  );

  return (
    <div>
      <Container>
        {localStorage.usertoken ? <Landing /> : loginRegLink}
      </Container>
      <Container>
        <h1 className="page-title">Top Headlines</h1>
      </Container>
      <Container>
        <Row>
          {res}
          {res2}
          {res3}
        </Row>
      </Container>
    </div>
  );
}

export default Home;