import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../../components/Graphic';
import GraphicImage from '../../../components/GraphicImage';
import Tag from './Tag';
import SponsorFlag from './SponsorFlag';
import _keyBy from 'lodash/keyBy';
import NodeCGReplicant from "../../../../Dashboard/NodeCGReplicant";
import { withAssetCache } from '../../../../context/AssetCache';
import { getPlayerAssetUrls } from '../../../../helpers/getPlayerAssetUrls';

import graphics from '../../scripts/graphics';

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
		transform: 'translateX(-640px)',
		transition: 'none',
	},
	rightHidden: {
		transform: 'translateX(640px)',
		transition: 'none',
	},
	information: {
		opacity: 0,
		position: 'relative'
	},
	activeInformation: {
		opacity: 1,
		transition: 'opacity 1s',
	}
};

const isOnScoreBoard = (sceneName) => {
	return sceneName === 'In-Game' || sceneName === 'In-Game (Reversed Cam)';
}

class Scoreboard extends React.Component {

	state = {
		programScene: null,
		replicant: window.nodecg.Replicant('obs:programScene', { defaultValue: null }),
    slideInOver: true,
    regionFlags: [],
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
				this.setState({slideInOver: isOnScoreBoard(newSceneReplicant.name)})
			}, 2500);
		}
	}

	renderSingles() {
		const { classes, scoreboard, assetCache } = this.props;
    const { programScene, slideInOver, regionFlags } = this.state;
    
    const regionFlagsByName = _keyBy(regionFlags, 'name');

		const player1 = scoreboard.players[0];
    const player2 = scoreboard.players[1];

    console.log(getPlayerAssetUrls(assetCache, player1));

		const leftClasses = [classes.score];
		const rightClasses = [classes.score];

		const infoClasses = [classes.information];

		if (slideInOver) {
			infoClasses.push(classes.activeInformation);
		}

		if (!isOnScoreBoard(programScene)) {
			leftClasses.push(classes.leftHidden);
			rightClasses.push(classes.rightHidden);
    }
    
		return (
			<React.Fragment>
        <NodeCGReplicant
          replicantName="assets:regionFlags"
          value={regionFlags}
          onNewValue={newValue => {
            this.setState({ regionFlags: newValue });
          }}
        />
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
	          country={regionFlagsByName[player1.country] ? regionFlagsByName[player1.country].url : ''}
						character={player1.character}
	          style={{
	            left: 417
	          }}
	        />
	        <SponsorFlag
	          sponsor={player2.sponsor}
	          country={regionFlagsByName[player2.country] ? regionFlagsByName[player2.country].url : ''}
						character={player2.character}
						side='right'
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
			infoClasses.push(classes.activeInformation);
		}

		if (!isOnScoreBoard(programScene)) {
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
						character={player1.character}
						style={{
							left: 417
						}}
					/>
					<SponsorFlag
						sponsor={player3.sponsor}
						country={player3.country}
						character={player3.character}
						side='right'
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

		const left = scoreboard.set.score.team1.filter(point => !!point);
		const right = scoreboard.set.score.team2.filter(point => !!point);

		const leftScore = left.map((point, index) => (
			<GraphicImage
				style={{ left: index * -18 }}
				key={`p1-${index}`}
				src={`build${graphics.scoreLeftFill}`}
			/>
		));

		const rightScore = right.map((point, index) => (
			<GraphicImage
				style={{ left: 'auto', right: index * -18 }}
				key={`p2-${index}`}
				src={`build${graphics.scoreRightFill}`}
			/>
		));

		return (
			<React.Fragment>
				{leftScore}
				{rightScore}
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
		const { slideInOver } = this.state;

		const infoClasses = [classes.information];
		if (slideInOver) {
			infoClasses.push(classes.activeInformation);
		}

		return (
			<Graphic enabled={enabled}>
				{scoreboard.format === 'singles'
					? this.renderSingles()
					: this.renderDoubles()}
				<div style={{height: '100%'}} className={classNames(infoClasses)}>
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

export default withAssetCache(withStyles(styles)(Scoreboard));
