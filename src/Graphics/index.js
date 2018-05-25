import React, { Component } from 'react';
import font from './frostbite/fonts/big_noodle_titling.woff';
import NodeCGReplicant from '../Dashboard/NodeCGReplicant';
import Scoreboard from './frostbite/components/Scoreboard';

class Graphics extends Component {
	state = {
		scoreboard: null
	};

	styles = {

	};

	renderGraphics () {
		const { scoreboard } = this.state;

		return (
			<React.Fragment>
				<Scoreboard scoreboard={scoreboard} />
			</React.Fragment>
		);
	}

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
