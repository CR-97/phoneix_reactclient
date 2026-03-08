import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import { FaPlus, FaAngleDoubleRight } from 'react-icons/fa';

function HomeItems3({ item3, onClick }) {
  const handleSubmit = () => {
    onClick({ title: item3.title, url: item3.url, image: item3.urlToImage, desc: item3.description });
  };

  return (
    <Col sm="4">
      <Card id="size">
        <CardImg top width="100%" src={item3.urlToImage} alt={item3.title} />
        <CardBody>
          <CardTitle tag="h5">{item3.title}</CardTitle>
          <CardSubtitle id="subtitle" className="mb-2">{item3.description}</CardSubtitle>
          <CardText>{item3.content}</CardText>
        </CardBody>
        <CardFooter>
          <button className="btn btn-circle btn-xl float-start" id="btn-save" onClick={handleSubmit}>
            <FaPlus />
          </button>
          <a href={item3.url} target="_blank" rel="noopener noreferrer" className="text-dark d-flex justify-content-end" id="read-more">
            <h5>Read more <FaAngleDoubleRight /></h5>
          </a>
        </CardFooter>
      </Card>
      <br />
    </Col>
  );
}

export default HomeItems3;


