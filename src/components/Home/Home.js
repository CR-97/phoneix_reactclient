import Content from './HomeItems';
import Content2 from './HomeItems2';
import Content3 from './HomeItems3';
import Landing from './Landing';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container, Row, Col
} from 'reactstrap';


const Home = props =>{
  const news = props.item;
  const report = props.item2;
  const item3 = props.item3;
  let res ,res2, res3;

  if(news.length>0){
    res = news.map((res) => 
    <Content item={res} onClick={props.onClick}/>
    );
  }

  if(report.length>0){
    res2 = report.map((res2) => 
    <Content2 item2={res2} onClick={props.onClick}/>
    );
  }

  if(item3.length>0){
    res3 = item3.map((res3) => 
    <Content3 item3={res3} onClick={props.onClick}/>
    );
  }

  const loginRegLink = (
    <div className="hero-jumbotron">
      <h1>WELCOME TO PHONEIX FOOTBALL</h1>
      <p>Your ultimate football companion – news, standings, scores and more.</p>
      <h3>Please register or login to explore all features</h3>
      <div className="hero-actions">
        <a href="/login" className="btn btn-light">Sign In</a>
        <a href="/register" className="btn btn-outline-light">Register</a>
      </div>
    </div>
    
  )

  return(
    <div>
      <Container>
      {localStorage.usertoken ? Landing : loginRegLink}
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
};

export default withRouter(Home);