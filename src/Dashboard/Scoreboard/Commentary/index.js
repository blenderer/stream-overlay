import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NodeCGReplicant from '../../NodeCGReplicant';

import Commentator from './Commentator';

import { withStyles } from '@material-ui/core/styles';

class Commentary extends Component {
	state = {
		scoreboard: null
	};

	handleChange = (index, value) => {
		this.setState(prevState => {
      const newCommentators = [...prevState.scoreboard.commentators];
      newCommentators[index] = value;
			return {
				...prevState,
				scoreboard: {
					...prevState.scoreboard,
					commentators: newCommentators
				}
			};
		});
	};

	renderForm() {
		const { classes } = this.props;
		const { scoreboard } = this.state;

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

	render() {
		const { classes } = this.props;
		const { scoreboard } = this.state;

		return (
			<React.Fragment>
				<NodeCGReplicant
					replicantName="scoreboard"
					value={this.state.scoreboard}
					onNewValue={newValue => {
						this.setState({ scoreboard: newValue });
					}}
				/>
				{scoreboard ? this.renderForm() : null}
			</React.Fragment>
		);
	}
}

const styles = theme => ({
	sponsor: {
		width: 60
	}
});

export default withStyles(styles)(Commentary);
