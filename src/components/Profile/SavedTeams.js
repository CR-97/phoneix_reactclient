import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

function SavedTeams({ item, onClick }) {
  const handleDislike = () => onClick({ name: item.name });

  return (
    <Col sm="3">
      <Card id="team-size">
        <CardImg id="img-size" top src={item.crest} alt={item.name} style={{ height: '120px', objectFit: 'contain', padding: '10px' }} />
        <CardBody>
          <CardTitle tag="h6">{item.name}</CardTitle>
          <hr />
          <CardText>Stadium: {item.stadium}</CardText>
          <CardText>
            Website:{' '}
            <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
          </CardText>
        </CardBody>
        <CardFooter>
          <button className="btn btn-circle btn-lg" id="btn-del" onClick={handleDislike}>
            <FaStar />
          </button>
        </CardFooter>
      </Card>
      <br />
    </Col>
  );
}

export default SavedTeams;
