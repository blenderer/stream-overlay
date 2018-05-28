import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

const styles = {
	eventName: {
		position: 'absolute',
		bottom: 114,
		left: 188,
		fontSize: 30,
		color: 'white'
	},
	eventLocation: {
		position: 'absolute',
		bottom: 70,
		left: 188,
		fontSize: 27,
		color: 'black'
	}
};

class Crowd extends PureComponent {
	render() {
		const { scoreboard, classes, enabled } = this.props;

		return (
			<Graphic enabled={enabled}>
				<GraphicImage src={`build${graphics.crowd}`} />
				<div className={classes.eventName}>
					{scoreboard.eventName} [{scoreboard.set.bracketPhase}]
				</div>
				<div className={classes.eventLocation}>
					Live from {scoreboard.eventLocation}
				</div>
			</Graphic>
		);
	}
}

export default withStyles(styles)(Crowd);
