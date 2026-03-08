import React from 'react';

function ScorerT4({ item }) {
  return (
    <tr>
      <td>{item.player.name}</td>
      <td>{item.team.name}</td>
      <td>{item.numberOfGoals}</td>
    </tr>
  );
}

export default ScorerT4;
