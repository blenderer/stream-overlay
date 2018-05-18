import React, { Component } from 'react';
import singlesBase from './frostbite-graphics/Overlays/SNS4-Gameplay-Singles-Base.png';
import singlesLeft from './frostbite-graphics/Overlays/SNS4_Scoreboard-Singles-Left.png';
import singlesRight from './frostbite-graphics/Overlays/SNS4_Scoreboard-Singles-Right.png';
import scoreLeftBG from './frostbite-graphics/Overlays/SNS4-Score-Left-Bo3.png';
import scoreRightBG from './frostbite-graphics/Overlays/SNS4-Score-Right-Bo3.png';
import scoreLeftFill from './frostbite-graphics/Overlays/SNS4-Score-Left-Fill.png';
import scoreRightFill from './frostbite-graphics/Overlays/SNS4-Score-Right-Fill.png';

import NodeCGReplicant from '../Dashboard/NodeCGReplicant';

class Graphics extends Component {
	state = {
		scoreboard: null
	};

	styles = {
		graphic: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0
		},
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
    }
	};

	renderGraphics() {
		const { scoreboard } = this.state;
		const styles = this.styles;

		return (
			<div style={{ position: 'relative', height: '100%' }}>
				<img
					style={styles.graphic}
					src={`build${singlesBase}`}
				/>
				<img
          style={styles.graphic}
					src={`build${singlesLeft}`}
				/>
        <img
					style={styles.graphic}
					src={`build${singlesRight}`}
				/>
        <img
					style={styles.graphic}
					src={`build${scoreLeftBG}`}
				/>
        <img
					style={styles.graphic}
					src={`build${scoreRightBG}`}
				/>
        <img
					style={styles.graphic}
					src={`build${scoreLeftFill}`}
				/>
        <img
					style={styles.graphic}
					src={`build${scoreRightFill}`}
				/>
				<div
          style={{ ...styles.name, left: 2 }}
				>
					{scoreboard.players[0].name}
				</div>
        <div
          style={{ ...styles.name, right: 2 }}
				>
					{scoreboard.players[1].name}
				</div>
        <div
          style={{ ...styles.bracketPhase}}
				>
					{scoreboard.set.bracketPhase}
				</div>
			</div>
		);
	}

	render() {
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
				{scoreboard ? this.renderGraphics() : null}
			</React.Fragment>
		);
	}
}

export default Graphics;
