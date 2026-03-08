import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { FaTrash, FaAngleDoubleRight } from 'react-icons/fa';

function SavedItems({ item, onClick }) {
  const handleSubmit = () => onClick({ title: item.title });

  return (
    <Col sm="4">
      <Card id="save-size">
        <CardImg top src={item.imageUrl} alt={item.title} style={{ height: '180px', objectFit: 'cover' }} />
        <CardBody>
          <CardTitle tag="h6">{item.title}</CardTitle>
          <hr />
          <CardText>{item.desc}</CardText>
        </CardBody>
        <CardFooter>
          <button className="btn btn-circle btn-xl float-start" id="btn-prime" onClick={handleSubmit}>
            <FaTrash />
          </button>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-dark d-flex justify-content-end" id="read-more">
            <h5>Read more <FaAngleDoubleRight /></h5>
          </a>
        </CardFooter>
      </Card>
      <br />
    </Col>
  );
}

export default SavedItems;
