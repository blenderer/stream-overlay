import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import Player from './Player';

import { withStyles } from 'material-ui/styles';

const initialPlayer = {
  sponsor: '',
  country: '',
  name: '',
  characer: ''
};

class Players extends Component {

  state = {
    player1: {...initialPlayer},
    player2: {...initialPlayer}
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction='row' spacing={16}>
        <Grid item>
          <Player
            model={state.player1}
            number={1}
            onChange={(key, value) => {
              this.onChange('player1', key, value)}
            }
          />
        </Grid>
        <Grid item>
          <Player
            model={state.player2}
            number={2}
            onChange={(key, value) => {
              this.onChange('player2', key, value)}
            }
          />
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
