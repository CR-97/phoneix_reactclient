import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter
} from 'reactstrap';
import {
  Fa,CardImage,Button
} from 'mdbreact';
const MatchesItems = props =>{

  // function handleSubmit(){
  //   props.onClick({
  //     title: props.item.title,
  //   });
  // }
  
    return(
      <div>
      <Card className="match-card">
          <CardBody>
            <div className="d-flex justify-content-between align-items-start">
              <CardTitle id="score-title">{props.item.competition.name}</CardTitle>
              <span style={{fontSize:'0.8rem', color:'#888', marginTop:'3px'}}>{props.item.status}</span>
            </div>
            <CardSubtitle id="scroe-text">
              <span style={{fontWeight:'700'}}>{props.item.homeTeam.name}</span>
              <span style={{margin:'0 10px', color:'#aaa'}}>vs</span>
              <span style={{fontWeight:'700'}}>{props.item.awayTeam.name}</span>
            </CardSubtitle>
            <CardText id="score-size">
              Score: <strong>{props.item.score.fullTime.homeTeam} - {props.item.score.fullTime.awayTeam}</strong>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
};

export default MatchesItems;




