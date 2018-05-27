import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

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
    currentImageIndex: 0,
    leaving: false
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
      if (this.state.images.length < 2) {
        return false;
      }
      
      this.setState(prevState => ({
        leaving: true
      }));

      setTimeout(() => {
        this.setState((prevState) => {
          const atEnd = prevState.currentImageIndex >= prevState.images.length - 1;

          return {
            ...prevState,
            leaving: false,
            currentImageIndex: atEnd ? 0 : prevState.currentImageIndex + 1
          };
        });
      }, 1900);

    };

    setInterval(this.interval, 7000);
  }

	render() {
		const { sponsor, country, classes, ...restOfProps } = this.props;
    const { images, currentImageIndex, leaving } = this.state;

    return (
      <img
        className={classNames(classes.image, {[classes.leaving]: leaving})}
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
    height: 54,
    transition: 'opacity 1.1s',
    opacity: 1
  },
  leaving: {
    opacity: 0,
    transition: 'opacity 1.9s',
  }
};

export default withStyles(styles)(SponsorFlag);
