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


		return (
			<Graphic enabled={enabled}>
        <GraphicImage src={`build${graphics.ggCamBase}`} />
        <GraphicImage src={`build${graphics.ggCamBo3}`} />
        <GraphicImage src={`build${graphics.ggBo31L}`} />
        <GraphicImage src={`build${graphics.ggBo31R}`} />
        <GraphicImage src={`build${graphics.ggBo32L}`} />
				<GraphicImage src={`build${graphics.ggBo32R}`} />
			</Graphic>
		);
	}
}

export default withStyles(styles)(MidSetReport);
