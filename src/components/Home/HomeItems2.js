import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import { FaPlus, FaAngleDoubleRight } from 'react-icons/fa';

function HomeItems2({ item2, onClick }) {
  const handleSubmit = () => {
    onClick({ title: item2.title, url: item2.url, image: item2.urlToImage, desc: item2.description });
  };

  return (
    <Col sm="4">
      <Card id="size">
        <CardImg top width="100%" src={item2.urlToImage} alt={item2.title} />
        <CardBody>
          <CardTitle tag="h5">{item2.title}</CardTitle>
          <CardSubtitle id="subtitle" className="mb-2">{item2.description}</CardSubtitle>
          <CardText>{item2.content}</CardText>
        </CardBody>
        <CardFooter>
          <button className="btn btn-circle btn-xl float-start" id="btn-save" onClick={handleSubmit}>
            <FaPlus />
          </button>
          <a href={item2.url} target="_blank" rel="noopener noreferrer" className="text-dark d-flex justify-content-end" id="read-more">
            <h5>Read more <FaAngleDoubleRight /></h5>
          </a>
        </CardFooter>
      </Card>
      <br />
    </Col>
  );
}

export default HomeItems2;



