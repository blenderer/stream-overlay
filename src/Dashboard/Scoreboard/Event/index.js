import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { withStyles } from '@material-ui/core/styles';

class Event extends Component {

  handleChange = (key, value) => {
    const { scoreboard } = this.props;
    this.props.onChange({
      ...scoreboard,
      [key]: value
    });
  }

  render () {
    const { classes, scoreboard } = this.props;

    return (
      <Grid item container direction='column' spacing={16}>
        <Grid item>
          <TextField
            label='Event Name'
            onChange={(e) => {this.handleChange('eventName', e.target.value)}}
            value={scoreboard.eventName}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Event Location'
            onChange={(e) => {this.handleChange('eventLocation', e.target.value)}}
            value={scoreboard.eventLocation}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Video Game'
            onChange={(e) => {this.handleChange('videoGame', e.target.value)}}
            value={scoreboard.videoGame}
          />
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">Format</FormLabel>
            <RadioGroup
              aria-label="format"
              name="format"
              value={scoreboard.format}
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
