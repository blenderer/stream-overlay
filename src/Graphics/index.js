import React, { Component } from 'react';
import font from './frostbite/fonts/big_noodle_titling.woff';
import NodeCGReplicant from '../Dashboard/NodeCGReplicant';
import Scoreboard from './frostbite/components/Scoreboard';
import Commentators from './frostbite/components/Commentators';
import BigCamera from './frostbite/components/BigCamera';
import SideSideCamera from './frostbite/components/SideSideCamera';
import ThreeCam from './frostbite/components/ThreeCam';
import Crowd from './frostbite/components/Crowd';

class Graphics extends Component {
	state = {
		scoreboard: null,
		activeOverlay: 'crowd'
	};

	styles = {};

	renderGraphics() {
		const { scoreboard, activeOverlay } = this.state;
		const graphics = [
			{ Component: Scoreboard, overlayName: 'scoreboard' },
			{ Component: Commentators, overlayName: 'commentators' },
			{ Component: BigCamera, overlayName: 'bigcamera' },
			{ Component: SideSideCamera, overlayName: 'sidesidecamera' },
			{ Component: ThreeCam, overlayName: 'threecam' },
			{ Component: Crowd, overlayName: 'crowd' },
		];

		return (
			<React.Fragment>
				{graphics.map(graphic => (
					<graphic.Component
						key={graphic.overlayName}
						enabled={activeOverlay === graphic.overlayName}
						scoreboard={scoreboard}
					/>
				))}
			</React.Fragment>
		);
	}

	render() {
		const { scoreboard } = this.state;

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
				{scoreboard ? this.renderGraphics() : null}
				<NodeCGReplicant
					replicantName="scoreboard"
					value={this.state.scoreboard}
					onNewValue={newValue => {
						this.setState({ scoreboard: newValue });
					}}
				/>
			</React.Fragment>
		);
	}
}

export default Graphics;
