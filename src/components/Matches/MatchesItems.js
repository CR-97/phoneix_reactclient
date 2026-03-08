import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function MatchesItems({ item }) {
  return (
    <div>
      <Card className="match-card">
        <CardBody>
          <div className="d-flex justify-content-between align-items-start">
            <CardTitle tag="h5" id="score-title">{item.competition.name}</CardTitle>
            <span style={{ fontSize: '0.8rem', color: '#888', marginTop: '3px' }}>{item.status}</span>
          </div>
          <CardSubtitle id="scroe-text" className="mb-2">
            <span style={{ fontWeight: '700' }}>{item.homeTeam.name}</span>
            <span style={{ margin: '0 10px', color: '#aaa' }}>vs</span>
            <span style={{ fontWeight: '700' }}>{item.awayTeam.name}</span>
          </CardSubtitle>
          <CardText id="score-size">
            Score:{' '}
            <strong>
              {item.score.fullTime.homeTeam} - {item.score.fullTime.awayTeam}
            </strong>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default MatchesItems;




