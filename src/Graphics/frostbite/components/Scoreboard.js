import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Graphic from '../../components/Graphic';
import GraphicImage from '../../components/GraphicImage';

import graphics from '../scripts/graphics';

const styles = {

};

class Scoreboard extends PureComponent {

  renderSingles () {
    return (
      <React.Fragment>
        <GraphicImage src={`build${graphics.singlesBase}`} />
        <GraphicImage src={`build${graphics.scoreLeftSingles}`} />
        <GraphicImage src={`build${graphics.scoreRightSingles}`} />
      </React.Fragment>
    );
  }

  renderDoubles () {
    return (
      <React.Fragment>
        <GraphicImage src={`build${graphics.doublesBase}`} />
        <GraphicImage src={`build${graphics.scoreLeftDoubles}`} />
        <GraphicImage src={`build${graphics.scoreRightDoubles}`} />
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

        <GraphicImage src={`build${graphics.scoreLeftFill}`} />
        <GraphicImage src={`build${graphics.scoreRightFill}`} />
      </Graphic>
		);
	}
}

export default withStyles(styles)(Scoreboard);
