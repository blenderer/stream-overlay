import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

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
  }
};

class Scoreboard extends PureComponent {

  renderSingles () {
    const { classes, scoreboard } = this.props;

    return (
      <React.Fragment>
        <GraphicImage src={`build${graphics.singlesBase}`} />
        <GraphicImage src={`build${graphics.scoreLeftSingles}`} />
        <GraphicImage src={`build${graphics.scoreRightSingles}`} />
        <div
          className={classes.name}
          style={{ left: 2 }}
				>
					{scoreboard.players[0].name}
				</div>
        <div
          className={classes.name}
          style={{ right: 2 }}
				>
					{scoreboard.players[1].name}
				</div>
      </React.Fragment>
    );
  }

  renderDoubles () {
    const { classes, scoreboard } = this.props;

    return (
      <React.Fragment>
        <GraphicImage src={`build${graphics.doublesBase}`} />
        <GraphicImage src={`build${graphics.scoreLeftDoubles}`} />
        <GraphicImage src={`build${graphics.scoreRightDoubles}`} />
        <div
          className={classes.name}
          style={{ left: 2, top: 0 }}
				>
					{scoreboard.players[0].name}
				</div>
        <div
          className={classes.name}
          style={{ left: 2, top: 46 }}
				>
					{scoreboard.players[1].name}
				</div>
        <div
          className={classes.name}
          style={{ right: 2, top: 0 }}
				>
					{scoreboard.players[2].name}
				</div>
        <div
          className={classes.name}
          style={{ right: 2, top: 46 }}
				>
					{scoreboard.players[3].name}
				</div>
      </React.Fragment>
    );
  }

  renderBo3 () {
    return (
      <React.Fragment>
        <GraphicImage src={`build${graphics.scoreLeftbo3}`} />
        <GraphicImage src={`build${graphics.scoreRightbo3}`} />
      </React.Fragment>
    );
  }

  renderBo5 () {
    return (
      <React.Fragment>
        <GraphicImage src={`build${graphics.scoreLeftbo5}`} />
        <GraphicImage src={`build${graphics.scoreRightbo5}`} />
      </React.Fragment>
    );
  }

  renderScore () {
    const { scoreboard } = this.props;

    const left = [];
    const right = [];

    for (let i = 0; i < scoreboard.set.player1; i++) {
      left.push(
        <GraphicImage style={{left: i * -18}} key={`p1-${i}`} src={`build${graphics.scoreLeftFill}`} />
      );
    }

    for (let i = 0; i < scoreboard.set.player2; i++) {
      right.push(
        <GraphicImage style={{left: 'auto', right: i * -18}} key={`p2-${i}`} src={`build${graphics.scoreRightFill}`} />
      );
    }

    return (
      <React.Fragment>
        {left}
        {right}
      </React.Fragment>
    );
  }

	render() {
    const { scoreboard } = this.props;
		return (
      <Graphic enabled>
        {
          scoreboard.format === 'singles'
          ? this.renderSingles()
          : this.renderDoubles()
        }
        {
          scoreboard.set.format === 'bo3'
          ? this.renderBo3()
          : this.renderBo5()
        }

        {this.renderScore()}

      </Graphic>
		);
	}
}

export default withStyles(styles)(Scoreboard);
