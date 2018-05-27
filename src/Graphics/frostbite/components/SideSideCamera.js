import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

const styles = {
  friends: {
    position: 'absolute',
    bottom: 120,
    left: 290
  }
};

class SideSideCamera extends PureComponent {
	render() {
		const { scoreboard, classes, enabled } = this.props;


		return (
			<Graphic enabled={enabled}>
				<GraphicImage src={`build${graphics.cam2}`} />
        <img className={classes.friends} src="build/friends/6x1.png" alt=""/>
			</Graphic>
		);
	}
}

export default withStyles(styles)(SideSideCamera);
