import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Tabs, { Tab } from 'material-ui/Tabs';

import Event from './Event';
import Players from './Players';
import Game from './Game';

import { withStyles } from 'material-ui/styles';

class Scoreboard extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <Tabs style={{marginBottom: 15}} value={value} onChange={this.handleChange}>
          <Tab label="Event Info" />
          <Tab label="Player Info" />
          <Tab label="Game Info" />
        </Tabs>
        {value === 0 && <Event />}
        {value === 1 && <Players />}
        {value === 2 && <Game />}
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
