import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autosuggest from 'react-autosuggest';

import characters from '../../../../data/smash4/characters';

import { withStyles } from '@material-ui/core/styles';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : characters.filter(character =>
    character.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

const renderInputComponent = inputProps => (
  <TextField {...inputProps} />
);

class Player extends Component {

  // onChange = (event, { newValue }) => {
  //   this.setState({
  //     value: newValue
  //   });
  // };
  //
  // // Autosuggest will call this function every time you need to update suggestions.
  // // You already implemented this logic above, so just use it.
  // onSuggestionsFetchRequested = ({ value }) => {
  //   this.setState({
  //     suggestions: getSuggestions(value)
  //   });
  // };
  //
  // // Autosuggest will call this function every time you need to clear suggestions.
  // onSuggestionsClearRequested = () => {
  //   this.setState({
  //     suggestions: []
  //   });
  // };

  onChange = (key, value) => {
    this.props.onChange({
      ...this.props.model,
      [key]: value
    });
  }

  render() {
    const { classes, number } = this.props;
    const {
      sponsor,
      country,
      name,
      character
    } = this.props.model;

    // const inputProps = {
    //   placeholder: 'Character',
    //   value,
    //   onChange: this.onChange
    // };

    return (
      <Grid container direction='column' spacing={16}>
        <Grid item>
          <h2>Player {number}</h2>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField
              className={classes.sponsor}
              label='Sponsor'
              value={sponsor || ''}
              onChange={(e) => {
                this.onChange('sponsor', e.target.value)
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.sponsor}
              label='Country'
              value={country || ''}
              onChange={(e) => {
                this.onChange('country', e.target.value)
              }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            <TextField
              label='Gamer Tag'
              value={name || ''}
              onChange={(e) => {
                this.onChange('name', e.target.value)
              }}
            />
          </Grid>
        </Grid>
        <Grid item container direction='row' spacing={16}>
          <Grid item>
            {/* <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              renderInputComponent={renderInputComponent}
            /> */}
            <TextField
              label='Character'
              value={character || ''}
              onChange={(e) => {
                this.onChange('character', e.target.value)
              }}
            />
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
