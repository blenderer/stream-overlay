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

    const player1 = [
      <GraphicImage key={0} src={`build${graphics.ggBo31L}`} />,
      <GraphicImage key={1} src={`build${graphics.ggBo32L}`} />
    ];

    const player2 = [
      <GraphicImage key={0} src={`build${graphics.ggBo31R}`} />,
      <GraphicImage key={1} src={`build${graphics.ggBo32R}`} />
    ];

		console.log(scoreboard.set.score.team1, scoreboard.set.score.team2);

		return (
			<Graphic enabled={enabled}>
        <GraphicImage src={`build${graphics.ggCamBase}`} />
        <GraphicImage src={`build${graphics.ggCamBo3}`} />
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
