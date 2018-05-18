import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import {
	FormLabel,
	FormControl,
	FormControlLabel,
	FormHelperText
} from 'material-ui/Form';
import NodeCGReplicant from '../../../NodeCGReplicant';

import { withStyles } from 'material-ui/styles';

class Game extends Component {
	state = {
		scoreboard: null
	};

	handleChange = (key, value) => {
		this.setState(prevState => {
			return {
				...prevState,
				scoreboard: {
					...prevState.scoreboard,
					set: {
						...prevState.scoreboard.set,
						[key]: value
					}
				}
			};
		});
	};

  renderForm () {
    const { classes } = this.props;
		const { scoreboard } = this.state;

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
									{scoreboard.set.format === 'bo5' && (
										<FormControlLabel
											value="2"
											control={<Radio />}
											label="2"
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
									{scoreboard.set.format === 'bo5' && (
										<FormControlLabel
											value="2"
											control={<Radio />}
											label="2"
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

	render() {
		const { classes } = this.props;
		const { scoreboard } = this.state;

		return (
			<React.Fragment>
				<NodeCGReplicant
					replicantName="scoreboard"
					value={this.state.scoreboard}
					onNewValue={newValue => {
						this.setState({ scoreboard: newValue });
					}}
				/>
        { scoreboard ? this.renderForm() : null}
			</React.Fragment>
		);
	}
}

const styles = theme => ({
	sponsor: {
		width: 60
	}
});

export default withStyles(styles)(Game);
