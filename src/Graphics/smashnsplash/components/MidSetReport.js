import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

const styles = {

};

class MidSetReport extends PureComponent {
	render() {
		const { scoreboard, classes, enabled } = this.props;

		const player1 = [];
		const player2 = [];

		if (scoreboard.set.format === 'bo3') {
			player1.push(
				<GraphicImage key={0} src={`build${graphics.ggBo31L}`} />,
	      <GraphicImage key={1} src={`build${graphics.ggBo32L}`} />
			);
			player2.push(
				<GraphicImage key={0} src={`build${graphics.ggBo31R}`} />,
	      <GraphicImage key={1} src={`build${graphics.ggBo32R}`} />
			);
		} else {
			player1.push(
				<GraphicImage key={0} src={`build${graphics.ggBo51L}`} />,
				<GraphicImage key={1} src={`build${graphics.ggBo52L}`} />,
				<GraphicImage key={2} src={`build${graphics.ggBo53L}`} />,
	      <GraphicImage key={3} src={`build${graphics.ggBo54L}`} />,
			);
			player2.push(
				<GraphicImage key={0} src={`build${graphics.ggBo51R}`} />,
				<GraphicImage key={1} src={`build${graphics.ggBo52R}`} />,
				<GraphicImage key={2} src={`build${graphics.ggBo53R}`} />,
	      <GraphicImage key={3} src={`build${graphics.ggBo54R}`} />,
			);
		}

		return (
			<Graphic enabled={enabled}>
        <GraphicImage src={`build${graphics.ggCamBase}`} />
				{scoreboard.set.format === 'bo3' ?
					<GraphicImage src={`build${graphics.ggCamBo3}`} />
					:<GraphicImage src={`build${graphics.ggCamBo5}`} />
				}


        {scoreboard.set.score.team1.map((point, index) => {
					if (!point) {
						return null;
					}

					return player1[index];
				})}

				{scoreboard.set.score.team2.map((point, index) => {
					if (!point) {
						return null;
					}

					return player2[index];
				})}

			</Graphic>
		);
	}
}

export default withStyles(styles)(MidSetReport);
