import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import { withStyles } from 'material-ui/styles';

class Game extends Component {
  state = {
    format: 'bo3',
    player1: '0',
    player2: '0'
  };

  handleFormatChange = event => {
    this.setState({ format: event.target.value });
  };

  handlePlayer1Change = event => {
    this.setState({ player1: event.target.value });
  };

  handlePlayer2Change = event => {
    this.setState({ player2: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction='column' spacing={16}>
        <Grid item>
          <TextField placeholder='Bracket Phase' />
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">Format</FormLabel>
            <RadioGroup
              aria-label="format"
              name="format"
              value={this.state.format}
              onChange={this.handleFormatChange}
            >
              <FormControlLabel value="bo3" control={<Radio />} label="Best of 3" />
              <FormControlLabel value="bo5" control={<Radio />} label="Best of 5" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <Grid container direction='row' spacing={16}>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Player 1</FormLabel>
                <RadioGroup
                  aria-label="player-1"
                  name="player-1"
                  value={this.state.player1}
                  onChange={this.handlePlayer1Change}
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Player 2</FormLabel>
                <RadioGroup
                  aria-label="player-2"
                  name="player-2"
                  value={this.state.player2}
                  onChange={this.handlePlayer2Change}
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                </RadioGroup>
              </FormControl>
            </Grid>
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

export default withStyles(styles)(Game);
