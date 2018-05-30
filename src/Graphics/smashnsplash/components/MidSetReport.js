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

    console.log(scoreboard.set.player1);

    const player1 = [
      <GraphicImage key={0} src={`build${graphics.ggBo31L}`} />,
      <GraphicImage key={1} src={`build${graphics.ggBo32L}`} />
    ];

    const player2 = [
      <GraphicImage key={0} src={`build${graphics.ggBo31R}`} />,
      <GraphicImage key={1} src={`build${graphics.ggBo32R}`} />
    ];

		return (
			<Graphic enabled={enabled}>
        <GraphicImage src={`build${graphics.ggCamBase}`} />
        <GraphicImage src={`build${graphics.ggCamBo3}`} />
        {player1.slice(0, scoreboard.set.player1)}
        {player2.slice(0, scoreboard.set.player2)}

			</Graphic>
		);
	}
}

export default withStyles(styles)(MidSetReport);
