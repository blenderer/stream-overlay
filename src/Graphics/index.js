import React, { Component } from 'react';

import font from './frostbite/fonts/big_noodle_titling.woff';

import graphics from './frostbite/scripts/graphics';

import singlesBase from './frostbite/graphics/Overlays/SNS4-Gameplay-Singles-Base.png';
import singlesLeft from './frostbite/graphics/Overlays/SNS4_Scoreboard-Singles-Left.png';
import singlesRight from './frostbite/graphics/Overlays/SNS4_Scoreboard-Singles-Right.png';
import scoreLeftBG from './frostbite/graphics/Overlays/SNS4-Score-Left-Bo3.png';
import scoreRightBG from './frostbite/graphics/Overlays/SNS4-Score-Right-Bo3.png';
import scoreLeftFill from './frostbite/graphics/Overlays/SNS4-Score-Left-Fill.png';
import scoreRightFill from './frostbite/graphics/Overlays/SNS4-Score-Right-Fill.png';

import NodeCGReplicant from '../Dashboard/NodeCGReplicant';

import GraphicImage from './components/GraphicImage';
import Graphic from './components/Graphic';

import Scoreboard from './frostbite/components/Scoreboard';

class Graphics extends Component {
	state = {
		scoreboard: null
	};

	styles = {
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

	render() {
		const { scoreboard } = this.state;

		return (
			<React.Fragment>
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'BigNoodle';
            src: url('build${font}') format('woff');
          }
          #graphics * {
            font-family: BigNoodle;
          }
        `}} />
				{ scoreboard ? <Scoreboard scoreboard={scoreboard} /> : null }
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
