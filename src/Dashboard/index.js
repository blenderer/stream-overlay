import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class Dashboard extends Component {

  render() {
    return (
      <div style={{padding: 10, overflow: 'hidden'}}>
        <Scoreboard />
      </div>
    );
  }
}

export default Dashboard;
