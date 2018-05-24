import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Event from './Event';
import CurrentSet from './CurrentSet';

import NodeCGReplicant from '../NodeCGReplicant';

import { withStyles } from '@material-ui/core/styles';

class Scoreboard extends Component {
  state = {
    value: 0,
    sceneList: [],
    programScene: {}
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  switchScene = (scene) => {
    window.nodecg.sendMessage('switch-scene', scene);
  }

  render() {
    const { classes } = this.props;
    const { value, sceneList, programScene } = this.state;

    return (
      <React.Fragment>
        <NodeCGReplicant
          replicantName='obs:sceneList'
          value={sceneList}
          onNewValue={(newValue) => {
            this.setState({sceneList: newValue})
          }}
        />
        <NodeCGReplicant
          replicantName='obs:programScene'
          value={programScene}
          onNewValue={(newValue) => {
            this.setState({programScene: newValue})
          }}
        />
        {sceneList.map((scene) => {
          return (
            <button onClick={() => {this.switchScene(scene)}} key={scene}>
              {scene}
            </button>
          )
        })}
        <div>
          {JSON.stringify(programScene)}
        </div>
        <div>
          <button onClick={this.switchScene}>
            switch scene!
          </button>
        </div>
        <Tabs style={{marginBottom: 15}} value={value} onChange={this.handleChange}>
          <Tab label="Event Info" />
          <Tab label="Current Set" />
        </Tabs>
        {value === 0 && <Event />}
        {value === 1 && <CurrentSet />}
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  sponsor: {
    width: 60
  }
});

export default withStyles(styles)(Scoreboard);
