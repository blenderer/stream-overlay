import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

import characters from '../data/smash4/characters';

class Dashboard extends Component {

  render() {
    return (
      <div style={{padding: 10, overflow: 'hidden'}}>
        {characters}
        <Scoreboard />
      </div>
    );
  }
}

export default Dashboard;
