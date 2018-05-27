import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import Tag from './Scoreboard/Tag';

import graphics from '../scripts/graphics';

const styles = {
	commentatorTag: {
		bottom: 107,
		fontSize: 46,
		width: 445,
		top: 'auto'
	},
	twitterTag: {
		bottom: 67,
    position: 'absolute',
    fontSize: 29,
    left: 156,
    width: 367,
    textAlign: 'center'
	}
};

class Commentators extends PureComponent {
	render() {
		const { scoreboard, classes, enabled } = this.props;

		const commentator1 = scoreboard.commentators[0];
		const commentator2 = scoreboard.commentators[1];

		return (
			<Graphic enabled={enabled}>
				<GraphicImage src={`build${graphics.commentary}`} />
				<Tag
					className={classes.commentatorTag}
					sponsor={commentator1.sponsor}
					name={commentator1.name}
					style={{ left: 105 }}
				/>
				<Tag
					className={classes.commentatorTag}
					sponsor={commentator2.sponsor}
					name={commentator2.name}
					style={{ right: 105 }}
				/>
				{commentator1.twitter ? (
					<div className={classes.twitterTag}>
						@{commentator1.twitter}
					</div>
				) : null}
				{commentator2.twitter ? (
					<div style={{right: 156, left: 'auto'}} className={classes.twitterTag}>
						@{commentator2.twitter}
					</div>
				) : null}
			</Graphic>
		);
	}
}

export default withStyles(styles)(Commentators);
