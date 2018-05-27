import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Player from './Player';

import { withStyles } from '@material-ui/core/styles';

class Players extends Component {
	onChange = (index, value) => {
		const { scoreboard } = this.props;
		const newPlayers = scoreboard.players;

		newPlayers[index] = value;
		this.props.onChange({
			...scoreboard,
			players: newPlayers
		});
	};

	swapSides = () => {
		const { scoreboard } = this.props;
		const newPlayers = [...scoreboard.players];
    const player1 = newPlayers[0];
    const player2 = newPlayers[1];
    const player3 = newPlayers[2];
    const player4 = newPlayers[3];

		if (scoreboard.format === 'singles') {
      newPlayers[0] = player2;
      newPlayers[1] = player1;
      this.props.onChange({
  		  ...scoreboard,
  		  players: newPlayers
  		});
    }

    if (scoreboard.format === 'doubles') {
      newPlayers[0] = player3;
      newPlayers[1] = player4;
      newPlayers[2] = player1;
      newPlayers[3] = player2;
      this.props.onChange({
  		  ...scoreboard,
  		  players: newPlayers
  		});
    }

	}

	render() {
		const { classes, scoreboard } = this.props;

		return (
			<React.Fragment>
				<Grid container direction="row" spacing={16}>
					<Grid item>
						<Button
							variant="raised"
							color="secondary"
							onClick={this.swapSides}
						>
							Swap Sides
						</Button>
					</Grid>
				</Grid>
				<Grid container direction="row" spacing={16}>
					{scoreboard.players.map((player, index) => {
						if (scoreboard.format === 'singles' && index > 1) {
							return null;
						}
						return (
							<Grid key={index} item>
								<Player
									model={player}
									number={index}
									onChange={value => {
										this.onChange(index, value);
									}}
								/>
							</Grid>
						);
					})}
				</Grid>
			</React.Fragment>
		);
	}
}

const styles = theme => ({
	sponsor: {
		width: 60
	}
});

export default withStyles(styles)(Players);
