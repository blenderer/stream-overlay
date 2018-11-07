import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Suggest from '../../components/Suggest';

import flags from '../../../../Graphics/smashnsplash/scripts/flags';
import sponsors from '../../../../Graphics/smashnsplash/scripts/sponsors';

import characters from 'game-characters/smashultimate';

import { withStyles } from '@material-ui/core/styles';

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
                label: 'Sponsor'
              }}
							onChange={selection =>
								this.onChange('sponsor', selection)
							}
							items={sponsors}
              inputValue={sponsor}
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
              inputValue={country}
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
						<Suggest
							inputProps={{
                label: 'Character'
              }}
							onChange={selection =>
								this.onChange('character', selection)
							}
							items={characters}
              inputValue={character}
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
