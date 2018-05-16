import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import Player from './Player';
import NodeCGReplicant from '../../../NodeCGReplicant';

import { withStyles } from 'material-ui/styles';

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

    return (
      <Grid container direction='row' spacing={16}>
        <NodeCGReplicant
          replicantName='scoreboard'
          value={this.state.scoreboard}
          onNewValue={(newValue) => {this.setState({scoreboard: newValue})}}
        />
        {state.scoreboard.players.map((player, index) => (
          <Grid key={index} item>
            <Player
              model={player}
              number={index}
              onChange={(value) => {
                this.onChange(index, value)}
              }
            />
          </Grid>
        ))}
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
