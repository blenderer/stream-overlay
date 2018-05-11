import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import { withStyles } from 'material-ui/styles';

class Event extends Component {
  state = {
    format: 'singles',
    eventName: 'Vista Tech Those # 33',
    eventLocation: 'Livonia, MI',
    videoGame: 'Smash 4'
  };

  handleFormatChange = event => {
    this.setState({ format: event.target.value });
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    const { classes } = this.props;
    const state = this.state;

    return (
      <Grid item container direction='column' spacing={16}>
        <Grid item>
          <TextField
            label='Event Name'
            onChange={(e) => {this.handleChange('eventName', e.target.value)}}
            value={state.eventName}
            placeholder='Event Name'
          />
        </Grid>
        <Grid item>
          <TextField
            label='Event Location'
            onChange={(e) => {this.handleChange('eventLocation', e.target.value)}}
            value={state.eventLocation}
            placeholder='Event Location'
          />
        </Grid>
        <Grid item>
          <TextField
            label='Video Game'
            onChange={(e) => {this.handleChange('videoGame', e.target.value)}}
            value={state.videoGame}
            placeholder='Video Game'
          />
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">Format</FormLabel>
            <RadioGroup
              aria-label="format"
              name="format"
              value={this.state.format}
              onChange={(e) => {
                this.handleChange('format', e.target.value)
              }}
            >
              <FormControlLabel value="singles" control={<Radio />} label="Singles" />
              <FormControlLabel value="doubles" control={<Radio />} label="Doubles" />
            </RadioGroup>
          </FormControl>
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
