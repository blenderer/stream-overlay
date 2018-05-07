import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Tabs, { Tab } from 'material-ui/Tabs';

import Event from './Event';
import CurrentSet from './CurrentSet';

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
