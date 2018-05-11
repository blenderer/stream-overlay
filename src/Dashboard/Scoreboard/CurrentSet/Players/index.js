import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import Player from './Player';

import { withStyles } from 'material-ui/styles';

const initialPlayer = {
  sponsor: '',
  country: '',
  name: '',
  character: ''
};

class Players extends Component {

  state = {
    player1: {...initialPlayer},
    player2: {...initialPlayer}
  };

  replicant = {};

  componentDidMount () {
    this.replicant = window.nodecg.Replicant('players');
    window.NodeCG.waitForReplicants(this.replicant).then(() => {
      this.setState((prevState, props) => {
        return {
          player1: this.replicant.value.player1 || this.state.player1,
          player2: this.replicant.value.player2 || this.state.player2
        };
      });
    });

  }

  onChange = (player, key, value) => {
    this.setState((prevState, props) => {
      const newPlayer = {
        ...prevState[player],
        [key]: value
      };

      this.replicant.value[player] = {...newPlayer};
      return {
        [player]: newPlayer
      };
    });
  }

  render() {
    const { classes } = this.props;
    const state = this.state;

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
