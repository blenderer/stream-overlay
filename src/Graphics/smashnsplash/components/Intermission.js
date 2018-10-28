import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

const styles = {

};

class Intermission extends PureComponent {
	render() {
		const { enabled } = this.props;


		return (
			<Graphic enabled={enabled}>
				<GraphicImage src={`build${graphics.startingSoon}`} />
			</Graphic>
		);
	}
}

export default withStyles(styles)(Intermission);
