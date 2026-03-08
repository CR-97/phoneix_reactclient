import React, { useState } from 'react';
import axios from 'axios';
import {
  Alert, Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, CardTitle,
} from 'reactstrap';

const API = 'https://guarded-depths-49314.herokuapp.com';

function Search() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [results, setResults] = useState([]);

  const onSubmit = e => {
    e.preventDefault();
    setAlertVisible(false);
    axios
      .get(`${API}/getSearch?q=${title}`)
      .then(res => {
        if (res.data === 'Not found') {
          setAlertVisible(true);
          setResults([]);
        } else {
          setResults(res.data.articles || []);
        }
      })
      .catch(() => alert('Search error. Please try again.'));
  };

  const newsCards = results.map(item => (
    <Col sm="6" lg="4" key={item.url} className="mb-3">
      <Card className="search-card h-100">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <CardBody>
            <CardTitle tag="h6" style={{ color: 'rgb(44,56,85)', fontWeight: '600' }}>{item.title}</CardTitle>
            {item.description && (
              <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: 0 }}>{item.description}</p>
            )}
          </CardBody>
        </a>
      </Card>
    </Col>
  ));

  return (
    <div>
      <Container>
        <div className="search-jumbotron">
          <h1 className="display-5">Headlines Search</h1>
          <p className="lead">Search for football news and headlines</p>
        </div>
        <Row>
          <Col>
            <Alert color="danger" isOpen={alertVisible} toggle={() => setAlertVisible(false)}>
              News not found. Try different keywords.
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col md="8" lg="6">
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="title" style={{ fontWeight: '600', color: 'rgb(44,56,85)' }}>
                  Enter keywords
                </Label>
                <div className="d-flex">
                  <Input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Enter keywords to search..."
                    onChange={e => setTitle(e.target.value)}
                    style={{ borderRadius: '8px 0 0 8px', borderRight: 'none' }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: '0 8px 8px 0', background: 'rgb(69,82,110)', border: 'none', padding: '0.5rem 1.2rem' }}
                  >
                    Search
                  </button>
                </div>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <p />
        <Row>{newsCards}</Row>
      </Container>
    </div>
  );
}

export default Search;
