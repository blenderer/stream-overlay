import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import { withStyles } from 'material-ui/styles';

class Event extends Component {
  state = {
    format: 'singles'
  };

  handleFormatChange = event => {
    this.setState({ format: event.target.value });
  };

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
          <TextField placeholder='Video Game' />
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
