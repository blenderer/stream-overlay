import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import { withStyles } from 'material-ui/styles';

class Event extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid item container direction='column' spacing={16}>
        <Grid item>
          <TextField placeholder='Event Name' />
        </Grid>
        <Grid item>
          <TextField placeholder='Event Location' />
        </Grid>
        <Grid item>
          <TextField placeholder='Game' />
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

export default withStyles(styles)(Event);
