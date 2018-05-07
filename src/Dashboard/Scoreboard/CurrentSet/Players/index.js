import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import Player from './Player';

import { withStyles } from 'material-ui/styles';

class Players extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction='row' spacing={16}>
        <Grid item>
          <Player number={1} />
        </Grid>
        <Grid item>
          <Player number={2} />
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

export default withStyles(styles)(Players);
