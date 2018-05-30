import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
	icon: {
		'& svg': {
			verticalAlign: 'text-top'
		}
	}
};

class TwitchName extends PureComponent {
	render() {
		const { children, className, classes, ...restProps } = this.props;
		
		return (
			<div className={classNames(classes.icon, className)} {...restProps}>
				<ion-icon name="logo-twitch" />
				{children}
			</div>
		);
	}
}

export default withStyles(styles)(TwitchName);
