import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
	graphic: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
    height: '100%',
    visibility: 'hidden'
	},
  enabled: {
    visibility: 'visible'
  }
};

class Graphic extends PureComponent {

	render() {
		const { children, classes, enabled } = this.props;

		return (
      <div className={classNames(classes.graphic, {
        [classes.enabled]: enabled
      })}>
        {children}
      </div>
		);
	}
}

export default withStyles(styles)(Graphic);
