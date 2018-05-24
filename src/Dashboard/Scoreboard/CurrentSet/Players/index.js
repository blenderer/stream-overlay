import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Player from './Player';
import NodeCGReplicant from '../../../NodeCGReplicant';

import { withStyles } from '@material-ui/core/styles';

class Players extends Component {

  state = {
    scoreboard: {
      players: []
    }
  };

  onChange = (index, value) => {
    this.setState((prevState) => {
      const newPlayers = prevState.scoreboard.players;
      newPlayers[index] = value;

      return {
        ...prevState,
        scoreboard: {
          ...prevState.scoreboard,
          players: newPlayers
        }
      };
    });
  }

  render() {
    const { classes } = this.props;
    const state = this.state;
    const { scoreboard } = state;

    return (
      <Grid container direction='row' spacing={16}>
        <NodeCGReplicant
          replicantName='scoreboard'
          value={this.state.scoreboard}
          onNewValue={(newValue) => {this.setState({scoreboard: newValue})}}
        />
        {state.scoreboard.players.map((player, index) => {
          if (scoreboard.format === 'singles' && index > 1) {
            return null;
          }
          return (
            <Grid key={index} item>
              <Player
                model={player}
                number={index}
                onChange={(value) => {
                  this.onChange(index, value)}
                }
              />
            </Grid>
          );
        })}
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
