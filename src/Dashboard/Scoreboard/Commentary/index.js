import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Commentator from './Commentator';

import { withStyles } from '@material-ui/core/styles';

class Commentary extends Component {

	handleChange = (index, value) => {
		const { scoreboard } = this.props;
		const newCommentators = [...scoreboard.commentators];

		newCommentators[index] = value;

		this.props.onChange({
			...scoreboard,
			commentators: newCommentators
		});
	};

	render () {
		const { classes, scoreboard } = this.props;

		return (
			<Grid container direction="row" spacing={16}>

          {scoreboard.commentators.map((commentator, index) => (
            <Grid key={index} item>
              <Commentator
    						number={index}
    						model={commentator}
                onChange={(value) => {this.handleChange(index, value)}}
    					/>
            </Grid>

          ))}
			</Grid>
		);
	}

}

const styles = theme => ({
	sponsor: {
		width: 60
	}
});

export default withStyles(styles)(Commentary);
