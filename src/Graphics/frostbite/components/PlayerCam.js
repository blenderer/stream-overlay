import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

const styles = {};

class PlayerCam extends PureComponent {
	render() {
		const { scoreboard } = this.props;


		return (
      <React.Fragment>
        <Graphic enabled />
      </React.Fragment>

    );
	}
}

export default withStyles(styles)(PlayerCam);
