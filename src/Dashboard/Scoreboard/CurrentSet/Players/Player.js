import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Autosuggest from 'react-autosuggest';

import characters from '../../../../data/smash4/characters';

import { withStyles } from 'material-ui/styles';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : characters.filter(character =>
    character.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

const renderInputComponent = inputProps => (
  <TextField {...inputProps} />
);

class Player extends Component {

  state = {
    value: '',
    suggestions: []
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { classes, number } = this.props;
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Character',
      value,
      onChange: this.onChange
    };

    return (
      <Grid container direction='column' spacing={16}>
        <Grid item>
          <h2>Player {number}</h2>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField className={classes.sponsor} placeholder='Sponsor' />
          </Grid>
          <Grid item>
            <TextField className={classes.sponsor} placeholder='Country' />
          </Grid>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField placeholder='Gamer Tag' />
          </Grid>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              renderInputComponent={renderInputComponent}
            />
            {/* <TextField placeholder='Character' /> */}
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

export default withStyles(styles)(Player);
