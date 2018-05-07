import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import Players from './Players';
import Game from './Game';

import { withStyles } from 'material-ui/styles';

class CurrentSet extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction='column' spacing={16}>
        <Grid item>
          <Players />
        </Grid>
        <Grid item>
          <Game />
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  sponsor: {
    width: 60
  }
});

export default withStyles(styles)(CurrentSet);
