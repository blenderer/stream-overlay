import React, { Component } from 'react';
import font from './smashnsplash/fonts/big_noodle_titling.woff';
import NodeCGReplicant from '../Dashboard/NodeCGReplicant';
import Scoreboard from './smashnsplash/components/Scoreboard';
import Commentators from './smashnsplash/components/Commentators';
import BigCamera from './smashnsplash/components/BigCamera';
import SideSideCamera from './smashnsplash/components/SideSideCamera';
import Intermission from './smashnsplash/components/Intermission';
import ThreeCam from './smashnsplash/components/ThreeCam';
import Crowd from './smashnsplash/components/Crowd';
import MidSetReport from './smashnsplash/components/MidSetReport';

class Graphics extends Component {
	state = {
		scoreboard: null,
		activeOverlay: 'Intermission',
		programScene: null
	};

	styles = {};

	componentDidMount () {
		window.nodecg.listenFor('obs:transitioning', (data) => {
			console.log(data);
		});
	}

	renderGraphics() {
		const { scoreboard, activeOverlay, programScene } = this.state;
		const graphics = [
			{ Component: Scoreboard, overlayName: 'In-Game' },
			{ Component: Scoreboard, overlayName: 'In-Game (Reversed Cam)' },
			{ Component: BigCamera, overlayName: 'Big 2-Cam (Left Cam)' },
			{ Component: BigCamera, overlayName: 'Big 2-Cam (Right Cam)' },
			{ Component: SideSideCamera, overlayName: '2 Cam (Players)' },
			{ Component: SideSideCamera, overlayName: '2 Cam (Comm. + Game)' },
			{ Component: MidSetReport, overlayName: 'Mid-Set Report (Bo3)' },
			{ Component: MidSetReport, overlayName: 'Mid-Set Report (Bo5)' },
			{ Component: ThreeCam, overlayName: '3-Cam (Game + Players)' },
			{ Component: ThreeCam, overlayName: '3-Cam (Comm. + Players)' },
			{ Component: Commentators, overlayName: 'Commentators' },
			{ Component: Crowd, overlayName: 'Crowd Cam (Left)' },
			{ Component: Crowd, overlayName: 'Crowd Cam (Right)' },
			{ Component: Intermission, overlayName: 'Intermission' },
		];

		return (
			<React.Fragment>
				{graphics.map(graphic => (
					<graphic.Component
						key={graphic.overlayName}
						enabled={programScene.name === graphic.overlayName}
						scoreboard={scoreboard}
					/>
				))}
			</React.Fragment>
		);
	}

	render() {
		const { scoreboard, programScene } = this.state;

		return (
			<React.Fragment>
				<style
					dangerouslySetInnerHTML={{
						__html: `
          @font-face {
            font-family: 'BigNoodle';
            src: url('build${font}') format('woff');
          }
          #graphics * {
            font-family: BigNoodle;
          }
        `
					}}
				/>
				{scoreboard && programScene ? this.renderGraphics() : null}
				<NodeCGReplicant
					replicantName="scoreboard"
					value={this.state.scoreboard}
					onNewValue={newValue => {
						this.setState({ scoreboard: newValue });
					}}
				/>
				<NodeCGReplicant
					replicantName="obs:programScene"
					value={programScene}
					onNewValue={newValue => {
						this.setState({ programScene: newValue });
					}}
				/>
			</React.Fragment>
		);
	}
}

export default Graphics;
