import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import { withStyles } from 'material-ui/styles';

class Player extends Component {

  render() {
    const { classes, number } = this.props;
    return (
      <Grid container direction='column' spacing={16}>
        <Grid item>
          <h2>Player {number}</h2>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField className={classes.sponsor} placeholder='Sponsor' />
          </Grid>
          <Grid item>
            <TextField className={classes.sponsor} placeholder='Country' />
          </Grid>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField placeholder='Gamer Tag' />
          </Grid>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField placeholder='Character' />
          </Grid>
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

export default withStyles(styles)(Player);
