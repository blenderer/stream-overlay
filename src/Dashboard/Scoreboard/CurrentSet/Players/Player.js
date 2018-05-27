import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Suggest from '../../components/Suggest';

import flags from '../../../../Graphics/frostbite/scripts/flags';
import sponsors from '../../../../Graphics/frostbite/scripts/sponsors';

import characters from '../../../../data/smash4/characters';

import { withStyles } from '@material-ui/core/styles';

const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: characters.filter(
				character =>
					character.toLowerCase().slice(0, inputLength) === inputValue
		  );
};

const getSuggestionValue = suggestion => suggestion;
const renderSuggestion = suggestion => <div>{suggestion}</div>;

const renderInputComponent = inputProps => <TextField {...inputProps} />;

class Player extends Component {
	onChange = (key, value) => {
		this.props.onChange({
			...this.props.model,
			[key]: value
		});
	};

	render() {
		const { classes, number } = this.props;
		const { sponsor, country, name, character } = this.props.model;

		return (
			<Grid container direction="column" spacing={16}>
				<Grid item>
					<h2>Player {number}</h2>
				</Grid>
				<Grid item container direction="row" spacing={16}>
					<Grid item>
            <Suggest
              inputProps={{
                className: classes.sponsor,
                label: 'Sponsor',
                value: sponsor
              }}
							onChange={selection =>
								this.onChange('sponsor', selection)
							}
							items={sponsors}
						/>
					</Grid>
					<Grid item>
						<Suggest
              inputProps={{
                className: classes.sponsor,
                label: 'Country'
              }}
							onChange={selection =>
								this.onChange('country', selection)
							}
							items={flags}
						/>
					</Grid>
				</Grid>
				<Grid item container direction="row" spacing={16}>
					<Grid item>
						<TextField
							label="Gamer Tag"
							value={name || ''}
							onChange={e => {
								this.onChange('name', e.target.value);
							}}
						/>
					</Grid>
				</Grid>
				<Grid item container direction="row" spacing={16}>
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
							label="Character"
							value={character || ''}
							onChange={e => {
								this.onChange('character', e.target.value);
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
