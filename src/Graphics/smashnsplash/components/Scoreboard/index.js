import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../../components/Graphic';
import GraphicImage from '../../../components/GraphicImage';
import NodeCGReplicant from '../../../../Dashboard/NodeCGReplicant';
import TwitchName from '../../../components/TwitchName';
import Tag from './Tag';
import SponsorFlag from './SponsorFlag';

import graphics from '../../scripts/graphics';
import flags from '../../scripts/flags';
import sponsors from '../../scripts/sponsors';

import classNames from 'classnames';

const styles = {
	name: {
		top: 6,
		width: 411,
		textAlign: 'center',
		color: 'white',
		fontSize: 39,
		position: 'absolute'
	},
	bracketPhase: {
		position: 'absolute',
		textAlign: 'center',
		color: 'white',
		fontSize: 20,
		bottom: 68,
		left: 0,
		right: 0
	},
	flag: {
		position: 'absolute',
		top: 0,
		width: 49,
		height: 54
	},
	sponsor: {
		color: 'rgba(225, 225, 225, 1)'
	},
	score: {
		transition: 'transform 2.5s',
		transform: 'translateX(0)'
	},
	leftHidden: {
		transform: 'translateX(-640px)'
	},
	rightHidden: {
		transform: 'translateX(640px)'
	},
	information: {
		opacity: 0,
		transition: 'opacity 1s',
		position: 'relative'
	},
	actionInformation: {
		opacity: 1
	}
};

const flagMap = flags.reduce(
	(map, flagName) => ({
		...map,
		[flagName]: true
	}),
	{}
);

const sponsorMap = sponsors.reduce(
	(map, sponsorName) => ({
		...map,
		[sponsorName]: true
	}),
	{}
);

class Scoreboard extends React.Component {

	state = {
		programScene: null,
		replicant: window.nodecg.Replicant('obs:programScene', { defaultValue: null }),
		slideInOver: true
	}

	componentDidMount () {
		window.NodeCG.waitForReplicants(this.state.replicant).then(() => {
			this.setState({programScene: this.state.replicant.value});
    });
		this.state.replicant.on('change', this.updateScene);
	}

	updateScene = (newSceneReplicant) => {
		if (newSceneReplicant && newSceneReplicant.name) {
			this.setState({
				programScene: newSceneReplicant.name,
				slideInOver: false
			});
			setTimeout(() => {
				this.setState({slideInOver: newSceneReplicant.name === 'Scoreboard'})
			}, 2500);
		}
	}

	renderSingles() {
		const { classes, scoreboard } = this.props;
		const { programScene, slideInOver } = this.state;

		const player1 = scoreboard.players[0];
		const player2 = scoreboard.players[1];

		const leftClasses = [classes.score];
		const rightClasses = [classes.score];

		const infoClasses = [classes.information];

		if (slideInOver) {
			infoClasses.push(classes.actionInformation);
		}

		if (programScene !== 'Scoreboard') {
			leftClasses.push(classes.leftHidden);
			rightClasses.push(classes.rightHidden);
		}

		return (
			<React.Fragment>
				<GraphicImage src={`build${graphics.singlesBase}`} />
				<GraphicImage className={leftClasses} src={`build${graphics.scoreLeftSingles}`} />
				<GraphicImage className={rightClasses} src={`build${graphics.scoreRightSingles}`} />
				<div className={classNames(infoClasses)}>
					<Tag
	          sponsor={player1.sponsor}
	          name={player1.name}
	          style={{ left: 2 }}
	        />
	        <Tag
	          sponsor={player2.sponsor}
	          name={player2.name}
	          style={{ right: 2 }}
	        />
	        <SponsorFlag
	          sponsor={player1.sponsor}
	          country={player1.country}
	          style={{
	            left: 417
	          }}
	        />
	        <SponsorFlag
	          sponsor={player2.sponsor}
	          country={player2.country}
	          style={{
	            right: 417
	          }}
	        />
				</div>
			</React.Fragment>
		);
	}

	renderDoubles() {
		const { classes, scoreboard } = this.props;
		const { slideInOver, programScene } = this.state;

		const player1 = scoreboard.players[0];
		const player2 = scoreboard.players[1];
		const player3 = scoreboard.players[2];
		const player4 = scoreboard.players[3];

		const leftClasses = [classes.score];
		const rightClasses = [classes.score];

		const infoClasses = [classes.information];

		if (slideInOver) {
			infoClasses.push(classes.actionInformation);
		}

		if (programScene !== 'Scoreboard') {
			leftClasses.push(classes.leftHidden);
			rightClasses.push(classes.rightHidden);
		}

		return (
			<React.Fragment>
				<GraphicImage src={`build${graphics.doublesBase}`} />
				<GraphicImage className={classNames(leftClasses)} src={`build${graphics.scoreLeftDoubles}`} />
				<GraphicImage className={classNames(rightClasses)} src={`build${graphics.scoreRightDoubles}`} />
				<div className={classNames(infoClasses)}>
					<Tag
						sponsor={player1.sponsor}
						name={player1.name}
						style={{ left: 2, top: 0 }}
					/>
					<Tag
						sponsor={player2.sponsor}
						name={player2.name}
						style={{ left: 2, top: 46 }}
					/>
					<Tag
						sponsor={player3.sponsor}
						name={player3.name}
						style={{ right: 2, top: 0 }}
					/>
					<Tag
						sponsor={player4.sponsor}
						name={player4.name}
						style={{ right: 2, top: 46 }}
					/>
					<SponsorFlag
						sponsor={player1.sponsor}
						country={player1.country}
						style={{
							left: 417
						}}
					/>
					<SponsorFlag
						sponsor={player3.sponsor}
						country={player3.country}
						style={{
							right: 417
						}}
					/>
				</div>
			</React.Fragment>
		);
	}

	renderBo3() {
		return (
			<React.Fragment>
				<GraphicImage src={`build${graphics.scoreLeftbo3}`} />
				<GraphicImage src={`build${graphics.scoreRightbo3}`} />
			</React.Fragment>
		);
	}

	renderBo5() {
		return (
			<React.Fragment>
				<GraphicImage src={`build${graphics.scoreLeftbo5}`} />
				<GraphicImage src={`build${graphics.scoreRightbo5}`} />
			</React.Fragment>
		);
	}

	renderScore() {
		const { scoreboard } = this.props;

		const left = [];
		const right = [];

		for (let i = 0; i < scoreboard.set.player1; i++) {
			left.push(
				<GraphicImage
					style={{ left: i * -18 }}
					key={`p1-${i}`}
					src={`build${graphics.scoreLeftFill}`}
				/>
			);
		}

		for (let i = 0; i < scoreboard.set.player2; i++) {
			right.push(
				<GraphicImage
					style={{ left: 'auto', right: i * -18 }}
					key={`p2-${i}`}
					src={`build${graphics.scoreRightFill}`}
				/>
			);
		}

		return (
			<React.Fragment>
				{left}
				{right}
			</React.Fragment>
		);
	}

	renderBracketPhase() {
		const { scoreboard, classes } = this.props;

		return (
			<div className={classes.bracketPhase}>
				{scoreboard.set.bracketPhase}
			</div>
		);
	}

	render() {
		const { scoreboard, enabled, classes } = this.props;
		const { programScene, slideInOver } = this.state;

		const infoClasses = [classes.information];
		if (slideInOver) {
			infoClasses.push(classes.actionInformation);
		}

		return (
			<Graphic enabled={enabled}>
				{scoreboard.format === 'singles'
					? this.renderSingles()
					: this.renderDoubles()}
				<div className={classNames(infoClasses)}>
				{scoreboard.set.format === 'bo3'
					? this.renderBo3()
					: this.renderBo5()}
					{this.renderScore()}
					{this.renderBracketPhase()
				}
				</div>
			</Graphic>
		);
	}
}

export default withStyles(styles)(Scoreboard);
