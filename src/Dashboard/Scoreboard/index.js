import React, { Component } from 'react';
import _cloneDeep from 'lodash/cloneDeep';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import Event from './Event';
import CurrentSet from './CurrentSet';
import Commentary from './Commentary';

import NodeCGReplicant from '../NodeCGReplicant';

import { withStyles } from '@material-ui/core/styles';

class Scoreboard extends Component {
	state = {
		value: 0,
		sceneList: [],
		programScene: {}
  };
  
  componentDidMount () {
    const characters = window.nodecg.Replicant('assets:characters');
    characters.on('change', (newValue, oldValue) => {
      this.setState({url: newValue[20].url});
    })
  }

	save = () => {
		this.setState({ scoreboard: this.state.draft });
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	updateDraft = value => {
		this.setState({ draft: value });
	};

	switchScene = scene => {
		window.nodecg.sendMessage('switch-scene', scene);
	};

	renderScoreboard() {
		const {
			value,
			scoreboard,
      draft,
      url
		} = this.state;

		const clean = JSON.stringify(scoreboard) === JSON.stringify(draft);

		return (
			<React.Fragment>
        <img src={url} alt=""/>
				<Button
					disabled={clean}
					onClick={this.save}
					variant="contained"
					color="primary"
				>
					Save
				</Button>
				<Tabs
					style={{ marginBottom: 15 }}
					value={value}
					onChange={this.handleChange}
				>
					<Tab label="Event Info" />
					<Tab label="Current Set" />
					<Tab label="Commentary" />
				</Tabs>
				{value === 0 && (
					<Event scoreboard={draft} onChange={this.updateDraft} />
				)}
				{value === 1 && (
					<CurrentSet
						scoreboard={draft}
						onChange={this.updateDraft}
					/>
				)}
				{value === 2 && (
					<Commentary
						scoreboard={draft}
						onChange={this.updateDraft}
					/>
				)}
			</React.Fragment>
		);
	}

	render() {
		const { sceneList, programScene } = this.state;

		return (
			<React.Fragment>
				<NodeCGReplicant
					replicantName="scoreboard"
					value={this.state.scoreboard}
					onNewValue={newValue => {
						this.setState({
							scoreboard: _cloneDeep(newValue),
							draft: _cloneDeep(newValue)
						});
					}}
				/>
				<NodeCGReplicant
					replicantName="obs:sceneList"
					value={sceneList}
					onNewValue={newValue => {
						this.setState({ sceneList: newValue });
					}}
				/>
				<NodeCGReplicant
					replicantName="obs:programScene"
					value={programScene}
					onNewValue={newValue => {
						this.setState({ programScene: newValue });
					}}
				/>
				{sceneList.map(scene => {
					return (
						<button
							onClick={() => {
								this.switchScene(scene);
							}}
							key={scene}
						>
							{scene}
						</button>
					);
				})}
				{/* <div>
          {JSON.stringify(programScene)}
        </div> */}
				{/* <div>
          <button onClick={this.switchScene}>
            switch scene!
          </button>
        </div> */}
				{this.state.scoreboard ? this.renderScoreboard() : null}
			</React.Fragment>
		);
	}
}

const styles = theme => ({
	sponsor: {
		width: 60
	}
});

export default withStyles(styles)(Scoreboard);
