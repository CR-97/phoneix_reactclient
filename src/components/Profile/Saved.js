import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { getProfile } from '../Auth/UserFunctions';

import {
  Container, Row
} from 'reactstrap';

import SavedTeam from './SavedTeams';
import SavedNews from './SavedItems';

import axios from 'axios';

export default class Saved extends Component{
  constructor(){
    super();
    this.state={
      team:[],
      saved:[],
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    };
    

  }

  componentDidMount(){
    this.getsaved();
    this.getsavedTeam();
    const token = localStorage.usertoken
    getProfile(token).then(res => {
      console.log("token" ,token)
      console.log(res)
      this.setState({
        first_name: res.first_name,
        last_name: res.last_name,
        email: res.email
      })
    })
  }

  componentDidUpdate(){
    this.getsaved();
    this.getsavedTeam();
  }

  getsavedTeam = () =>{
    axios
    .get("https://guarded-depths-49314.herokuapp.com/getSaveTeams") 
      .then(response =>{
        this.setState({
          team:response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getsaved =() =>{
    axios
    .get("https://guarded-depths-49314.herokuapp.com/getSaveNews") 
      .then(response =>{
        this.setState({
          saved:response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(title){
     
    console.log("title =",title);
    axios.post("https://guarded-depths-49314.herokuapp.com/getSaveNews/delete", title)
    .then(res =>{
      alert("Item Deleted");
    })
    .catch(err=>{
      console.log('Error: ', err);
    });
}

  handleDislike(name){
      console.log(name);
      axios.post("https://guarded-depths-49314.herokuapp.com/getSaveTeams/delete", name)
      .then(res =>{
        alert("Item Deleted");
      })
      .catch(err=>{
        console.log('Error: ', err);
      });
    }

  render(){
    const team = this.state.team.map(item =>{
      return(
        <SavedTeam item ={item} onClick={this.handleDislike}/>
      );
    })

    const saved = this.state.saved.map(item =>{
      return(
        <SavedNews item ={item}  onClick={this.handleDelete}/>
      );
    })
    return(
      <div>
        <Container>
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </Container>
        <Container>
          <h1>Saved Teams</h1>
        </Container>
        <Container>
          <Row>
          {team}
          </Row>
        </Container>
        <Container>
          <h1>Saved Headlines</h1>
        </Container>
        <Container>
          <Row>
          {saved}
          </Row>
        </Container>
      </div>
    );
  }

}