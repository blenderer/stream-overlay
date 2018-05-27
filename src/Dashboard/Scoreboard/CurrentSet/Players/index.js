import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Player from './Player';

import { withStyles } from '@material-ui/core/styles';

class Players extends Component {

  onChange = (index, value) => {
    const { scoreboard } = this.props;
    const newPlayers = scoreboard.players;

    newPlayers[index] = value;
    this.props.onChange({
      ...scoreboard,
      players: newPlayers
    });
  }

  render() {
    const { classes, scoreboard } = this.props;

    return (
      <Grid container direction='row' spacing={16}>
        {scoreboard.players.map((player, index) => {
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
