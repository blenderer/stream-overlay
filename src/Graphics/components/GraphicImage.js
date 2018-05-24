import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
};

class GraphicImage extends PureComponent {

	render() {
		const { src, classes, className, style = {} } = this.props;

		return (
      <img style={style} className={classNames(classes.image, className)} src={src} alt=""/>
		);
	}
}

export default withStyles(styles)(GraphicImage);
