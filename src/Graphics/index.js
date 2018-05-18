import React, { Component } from 'react';
import logo from '../logo.svg';

import NodeCGReplicant from '../Dashboard/NodeCGReplicant';

class Graphics extends Component {

  state = {
    scoreboard: null
  }

  renderGraphics () {
    const { scoreboard } = this.state;

    return (
      <div>
        <img style={{width: 50}} src={`build${logo}`} alt=""/>
        <h1>{scoreboard.format}</h1>
      </div>
    );
  }

  render() {
    const { scoreboard } = this.state;

    return (
      <React.Fragment>
        <NodeCGReplicant
          replicantName='scoreboard'
          value={this.state.scoreboard}
          onNewValue={(newValue) => {this.setState({scoreboard: newValue})}}
        />
        {scoreboard ? this.renderGraphics() : null}
      </React.Fragment>
    );
  }
}

export default Graphics;
