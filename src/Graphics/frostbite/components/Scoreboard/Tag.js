import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Tag extends React.Component {

	render() {
		const { sponsor, name, classes } = this.props;

		return (
      <div className={classes.name} {...this.props}>
        <span className={classes.sponsor}>
          {sponsor ? sponsor + ' ' : null}
        </span>
        {name}
      </div>
		);
	}
}

const styles = {
	name: {
		top: 6,
		width: 411,
		textAlign: 'center',
		color: 'white',
		fontSize: 39,
		position: 'absolute'
	},
	sponsor: {
		color: 'rgba(225, 225, 225, 1)'
	}
};

export default withStyles(styles)(Tag);
