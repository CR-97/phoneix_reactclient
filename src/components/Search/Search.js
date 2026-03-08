import React, { Component } from 'react';
import axios from 'axios';

import {
  Alert,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Card, CardBody,
  CardTitle
} from 'reactstrap';
import {
  Button
} from 'mdbreact';

export default class Search extends Component{
  constructor() {
    super();
    this.state = {
      alertVisible: false,
      title: '',
      search: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  //for popup
  onDismiss() {
    this.setState({ alertVisible: false });
  }

   //for form
   onSubmit = e => {
    e.preventDefault();
    this.setState({ alertVisible: false });

    const query = `https://guarded-depths-49314.herokuapp.com/getSearch?q=${this.state.title}`;

    console.log(query);

    axios
      .get(query)
      .then(result => {
        console.log(result.data);
        if (result.data === 'Not found') {
          this.setState({ alertVisible: true });
        }else{
          this.setState({search:result.data.articles});
        }
      })
      .catch(error => {
        alert('Error: ', error);
      });
  };

  // for form field
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
      
      let newsCard;
      newsCard = this.state.search.map(item =>{
        return(
        <Col sm="6" lg="4" key={item.url} className="mb-3">
          <Card className="search-card h-100">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
          <CardBody>
            <CardTitle style={{color:'rgb(44,56,85)', fontWeight:'600'}}>{item.title}</CardTitle>
            {item.description && <p style={{fontSize:'0.88rem', color:'#666', marginBottom:0}}>{item.description}</p>}
          </CardBody>
          </a>
          </Card>
        </Col>
        );
      })
      return(
      <div>
        <Container>
          <div className="search-jumbotron">
            <h1 className="display-5">Headlines Search</h1>
            <p className="lead">Search for football news and headlines</p>
          </div>
          <Row>
            <Col>
              <Alert
                color="danger"
                isOpen={this.state.alertVisible}
                toggle={this.onDismiss}
              >
                News not found. Try different keywords.
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col md="8" lg="6">
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="title" style={{fontWeight:'600', color:'rgb(44,56,85)'}}>Enter keywords</Label>
                  <div className="d-flex">
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter keywords to search..."
                      onChange={this.onChange}
                      style={{borderRadius:'8px 0 0 8px', borderRight:'none'}}
                    />
                    <Button color="primary" style={{borderRadius:'0 8px 8px 0', background:'rgb(69,82,110)', border:'none', padding:'0.5rem 1.2rem'}}>Search</Button>
                  </div>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <p />
          <Row>{newsCard}</Row>
        </Container>
      </div>
    );
  }
}
