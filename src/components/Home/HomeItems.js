import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import { FaPlus, FaAngleDoubleRight } from 'react-icons/fa';

function HomeItems({ item, onClick }) {
  const handleSubmit = () => {
    onClick({ title: item.title, url: item.url, image: item.urlToImage, desc: item.description });
  };

  return (
    <Col sm="4">
      <Card id="size">
        <CardImg top width="100%" src={item.urlToImage} alt={item.title} />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle id="subtitle" className="mb-2">{item.description}</CardSubtitle>
          <CardText>{item.content}</CardText>
        </CardBody>
        <CardFooter>
          <button className="btn btn-circle btn-xl float-start" id="btn-save" onClick={handleSubmit}>
            <FaPlus />
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

export default HomeItems;




