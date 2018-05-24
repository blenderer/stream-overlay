import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class Dashboard extends Component {

  render() {
    return (
      <div style={{padding: 10}}>
        <style dangerouslySetInnerHTML={{__html: `
          body {
            overflow: scroll;
          }
        `}} />
        <nodecg-widget-obs></nodecg-widget-obs>
        <Scoreboard />
      </div>
    );
  }
}

export default Dashboard;
