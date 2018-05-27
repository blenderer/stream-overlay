import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Suggest from '../components/Suggest';

import sponsors from '../../../Graphics/frostbite/scripts/sponsors';

import { withStyles } from '@material-ui/core/styles';

class Commentator extends Component {
	onChange = (key, value) => {
		this.props.onChange({
			...this.props.model,
			[key]: value
		});
	};

	render() {
		const { classes, number } = this.props;
		const { sponsor, name, twitter, twitch } = this.props.model;

		return (
			<Grid container direction="column" spacing={16}>
				<Grid item>
					<h2>Commentator {number}</h2>
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
						<TextField
							label="Twitter"
							value={twitter || ''}
							onChange={e => {
								this.onChange('twitter', e.target.value);
							}}
						/>
					</Grid>
				</Grid>
        <Grid item container direction="row" spacing={16}>
					<Grid item>
						<TextField
							label="Twitch"
							value={twitch || ''}
							onChange={e => {
								this.onChange('twitch', e.target.value);
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

export default withStyles(styles)(Commentator);
