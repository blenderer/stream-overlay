import React, { Component } from 'react';
import font from './smashnsplash/fonts/big_noodle_titling.woff';
import NodeCGReplicant from '../Dashboard/NodeCGReplicant';
import Scoreboard from './smashnsplash/components/Scoreboard';
import Commentators from './smashnsplash/components/Commentators';
import BigCamera from './smashnsplash/components/BigCamera';
import SideSideCamera from './smashnsplash/components/SideSideCamera';
import ThreeCam from './smashnsplash/components/ThreeCam';
import Crowd from './smashnsplash/components/Crowd';
import MidSetReport from './smashnsplash/components/MidSetReport';

class Graphics extends Component {
	state = {
		scoreboard: null,
		activeOverlay: 'commentators'
	};

	styles = {};

	componentDidMount () {
		window.nodecg.listenFor('obs:transitioning', (data) => {
			console.log(data);
		});
	}

	renderGraphics() {
		const { scoreboard, activeOverlay } = this.state;
		const graphics = [
			{ Component: Scoreboard, overlayName: 'scoreboard' },
			{ Component: Commentators, overlayName: 'commentators' },
			{ Component: BigCamera, overlayName: 'bigcamera' },
			{ Component: SideSideCamera, overlayName: 'sidesidecamera' },
			{ Component: ThreeCam, overlayName: 'threecam' },
			{ Component: Crowd, overlayName: 'crowd' },
			{ Component: MidSetReport, overlayName: 'midsetreport' },
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
