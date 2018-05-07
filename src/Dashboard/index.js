import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Dashboard extends Component {

  render() {
    return (
      <div style={{padding: 10}}>
        <TextField placeholder='hello world' />
      </div>
    );
  }
}

export default Dashboard;
