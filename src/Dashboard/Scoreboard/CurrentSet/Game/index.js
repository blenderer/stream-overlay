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

  replicant = {};

  componentDidMount () {
    this.replicant = window.nodecg.Replicant('set', {defaultValue: {}});

    window.NodeCG.waitForReplicants(this.replicant).then(() => {
      this.setState((prevState, props) => {
        return {
          ...this.replicant.value
        };
      });
    });
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
    if (!this.replicant.value) {
      this.replicant.value = {};
    }
    this.replicant.value[key] = value;
  }

  render() {
    const { classes } = this.props;
    const { format } = this.state;

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
              value={format}
              onChange={(e) => {
                this.handleChange('format', e.target.value);
              }}
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
                  onChange={(e) => {
                    this.handleChange('player1', e.target.value);
                  }}
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  {
                    format === 'bo5' &&
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                  }
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
                  onChange={(e) => {
                    this.handleChange('player2', e.target.value);
                  }}
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  {
                    format === 'bo5' &&
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                  }

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
