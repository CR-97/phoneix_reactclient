import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

function T1({ item, onClick }) {
  const handleLike = () => {
    onClick({ name: item.name, crest: item.crest, site: item.website, stadium: item.venue });
  };

  return (
    <Col sm="3">
      <Card id="team-size">
        <CardImg
          top
          src={item.crest}
          alt={item.name}
          style={{ height: '120px', objectFit: 'contain', padding: '10px' }}
        />
        <CardBody>
          <CardTitle tag="h6">{item.name}</CardTitle>
          <hr />
          <CardText>Stadium: {item.venue}</CardText>
          <CardText>
            Website:{' '}
            <a href={item.website} target="_blank" rel="noopener noreferrer">
              {item.website}
            </a>
          </CardText>
        </CardBody>
        <CardFooter>
          <button className="btn btn-circle btn-lg" id="btn-star" onClick={handleLike}>
            <FaStar />
          </button>
        </CardFooter>
      </Card>
      <br />
    </Col>
  );
}

export default T1;
