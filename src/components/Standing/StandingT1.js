import React from 'react';

function StandingT1({ item }) {
  return (
    <tr>
      <td>{item.position}</td>
      <td>{item.team.name}</td>
      <td>{item.playedGames}</td>
      <td>{item.won}</td>
      <td>{item.draw}</td>
      <td>{item.lost}</td>
      <td>{item.goalsFor}</td>
      <td>{item.goalsAgainst}</td>
      <td>{item.goalDifference}</td>
      <td>{item.points}</td>
    </tr>
  );
}

export default StandingT1;
