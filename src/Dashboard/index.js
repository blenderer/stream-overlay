import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import NodeCGReplicant from './NodeCGReplicant';

class Dashboard extends Component {
  state = {
    bla: {'hello': 'warld'}
  };

  render() {
    return (
      <div style={{padding: 10, overflow: 'hidden'}}>
        <Scoreboard />
        <input
          type="text"
          value={this.state.bla.hello}
          onChange={(e) => {this.setState({bla: {hello: e.target.value}})}}
        />
        <NodeCGReplicant
          replicantName='bla'
          value={this.state.bla}
          onNewValue={(newValue) => {this.setState({bla: newValue})}}
        />
      </div>
    );
  }
}

export default Dashboard;
