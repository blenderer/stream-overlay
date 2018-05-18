import React, { Component } from 'react';
import singlesBase from './frostbite-graphics/Overlays/SNS4-Gameplay-Singles-Base.png';
import singlesLeft from './frostbite-graphics/Overlays/SNS4_Scoreboard-Singles-Left.png';
import singlesRight from './frostbite-graphics/Overlays/SNS4_Scoreboard-Singles-Right.png';

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
		}
	};

	renderGraphics() {
		const { scoreboard } = this.state;
		const styles = this.styles;

		return (
			<div style={{ position: 'relative' }}>
				<img
					style={styles.graphic}
					src={`build${singlesBase}`}
					alt=""
				/>
				<img
          style={styles.graphic}
					src={`build${singlesLeft}`}
					alt=""
				/>
        <img
					style={styles.graphic}
					src={`build${singlesRight}`}
					alt=""
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
