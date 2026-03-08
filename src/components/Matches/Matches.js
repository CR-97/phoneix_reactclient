import React from 'react';
import { Container } from 'reactstrap';
import MatchContent from './MatchesItems';

function Matches({ item = [] }) {
  return (
    <div>
      <Container>
        <h1 className="page-title">Today&#39;s Matches</h1>
      </Container>
      <Container>
        {item.map((match, i) => (
          <MatchContent key={match.id || i} item={match} />
        ))}
      </Container>
    </div>
  );
}

export default Matches;