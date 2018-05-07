import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class Dashboard extends Component {

  render() {
    return (
      <div style={{padding: 10}}>
        <Scoreboard />
      </div>
    );
  }
}

export default Dashboard;
