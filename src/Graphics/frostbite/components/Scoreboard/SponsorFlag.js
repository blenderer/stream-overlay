import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

import flags from '../../scripts/flags';
import sponsors from '../../scripts/sponsors';

const flagMap = flags.reduce(
	(map, flagName) => ({
		...map,
		[flagName]: true
	}),
	{}
);

const sponsorMap = sponsors.reduce(
	(map, sponsorName) => ({
		...map,
		[sponsorName]: true
	}),
	{}
);

class SponsorFlag extends React.Component {

  state = {
    images: [],
    currentImageIndex: 0
  };

  static getDerivedStateFromProps (props) {
    const { country, sponsor } = props;
    const images = [];

    if (flagMap[country]) {
      images.push(`build/flags/${country}.png`);
    }

    if (sponsorMap[sponsor]) {
      images.push(`build/logos/${sponsor}.png`);
    }

    return { images };
  }

  componentDidMount () {
    this.setRotator();
  }

  componentWillUnmount () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setRotator () {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = () => {

      this.setState((prevState) => {
        const atEnd = prevState.currentImageIndex >= prevState.images.length - 1;

        return {
          ...prevState,
          currentImageIndex: atEnd ? 0 : prevState.currentImageIndex + 1
        };
      });
    };

    setInterval(this.interval, 9001);
  }

	render() {
		const { sponsor, country, classes, ...restOfProps } = this.props;
    const { images, currentImageIndex } = this.state;

    return (
      <img
        className={classes.image}
        src={images[currentImageIndex]}
        alt=""
        {...restOfProps}
      />
    );
	}
}

const styles = {
  image: {
    position: 'absolute',
    top: 0,
    width: 49,
    height: 54
  },
};

export default withStyles(styles)(SponsorFlag);
