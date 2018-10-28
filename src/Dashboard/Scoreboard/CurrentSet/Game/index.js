import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

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
		const score = scoreboard.set.score;

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
						label="Bracket Phase"
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
					<Button color='secondary' variant='raised' onClick={() => {
						this.handleChange(
							'score',
							{
								team1: [false, false, false, false, false],
								team2: [false, false, false, false, false]
							}
						);
					}}>
						Reset Score
					</Button>
				</Grid>
				<Grid item>
					<Grid container direction="row">
						{[0, 1, 2, 3, 4].map(i => {

							let value = '';

							if (score.team1[i]) {
								value = '1';
							} else if (score.team2[i]) {
								value = '2';
							}

							return (
								<Grid item key={i}>
									<Grid container direction='row'>
										<Grid item>
											Game {i + 1}:
										</Grid>
										<Grid item>
											<RadioGroup
												aria-label="gender"
												name="team1"
												className={classes.group}
												value={value}
												onChange={(e) => {
													const newScore = {
														team1: [...score.team1],
														team2: [...score.team2]
													};

													if (e.target.value === '1') {
														newScore.team1[i] = true;
														newScore.team2[i] = false;
													} else {
														newScore.team1[i] = false;
														newScore.team2[i] = true;
													}

													this.handleChange(
														'score',
														newScore
													);
												}}
											>
												<FormControlLabel value="1" control={<Radio color="primary" />} label="Player 1" />
												<FormControlLabel value="2" control={<Radio color="primary" />} label="Player 2" />
											</RadioGroup>
										</Grid>
									</Grid>
								</Grid>
							);
						})}
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
