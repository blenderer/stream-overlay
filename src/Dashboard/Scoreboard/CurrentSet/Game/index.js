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

class Game extends Component {

	handleChange = (key, value) => {
		const scoreboard = this.props.scoreboard;

		this.props.onChange({
			...scoreboard,
			set: {
				...scoreboard.set,
				[key]: value
			}
		});
	};

  render () {
    const { classes, scoreboard } = this.props;

		return (
			<Grid container direction="column" spacing={16}>
				<Grid item>
					<TextField
						value={scoreboard.set.bracketPhase}
						onChange={e => {
							this.handleChange(
								'bracketPhase',
								e.target.value
							);
						}}
						placeholder="Bracket Phase"
					/>
				</Grid>
				<Grid item>
					<FormControl component="fieldset">
						<FormLabel component="legend">Format</FormLabel>
						<RadioGroup
							aria-label="format"
							name="format"
							value={scoreboard.set.format}
							onChange={e => {
								this.handleChange('format', e.target.value);
							}}
						>
							<FormControlLabel
								value="bo3"
								control={<Radio />}
								label="Best of 3"
							/>
							<FormControlLabel
								value="bo5"
								control={<Radio />}
								label="Best of 5"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item>
					<Grid container direction="row" spacing={16}>
						<Grid item>
							<FormControl component="fieldset">
								<FormLabel component="legend">
									Player 1
								</FormLabel>
								<RadioGroup
									aria-label="player-1"
									name="player-1"
									value={scoreboard.set.player1}
									onChange={e => {
										this.handleChange(
											'player1',
											e.target.value
										);
									}}
								>
									<FormControlLabel
										value="0"
										control={<Radio />}
										label="0"
									/>
									<FormControlLabel
										value="1"
										control={<Radio />}
										label="1"
									/>
									<FormControlLabel
										value="2"
										control={<Radio />}
										label="2"
									/>
									{scoreboard.set.format === 'bo5' && (
										<FormControlLabel
											value="3"
											control={<Radio />}
											label="3"
										/>
									)}
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl component="fieldset">
								<FormLabel component="legend">
									Player 2
								</FormLabel>
								<RadioGroup
									aria-label="player-2"
									name="player-2"
									value={scoreboard.set.player2}
									onChange={e => {
										this.handleChange(
											'player2',
											e.target.value
										);
									}}
								>
									<FormControlLabel
										value="0"
										control={<Radio />}
										label="0"
									/>
									<FormControlLabel
										value="1"
										control={<Radio />}
										label="1"
									/>
									<FormControlLabel
										value="2"
										control={<Radio />}
										label="2"
									/>
									{scoreboard.set.format === 'bo5' && (
										<FormControlLabel
											value="3"
											control={<Radio />}
											label="3"
										/>
									)}
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
