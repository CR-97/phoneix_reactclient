import React, {Component} from 'react';
import { Table, Container } from 'reactstrap';


const Table1 = props =>{
  //console.log(scorer);
  return (
    <tr>     
    <td>{props.item.player.name}</td>
    <td>{props.item.team.name}</td>
    <td>{props.item.numberOfGoals}</td>
  </tr>
  );

};
export default Table1;
