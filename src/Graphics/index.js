import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import queryString from 'query-string';

import ThreeDS from './ThreeDS';
import Base from './Base';

const styles = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'rgb(254, 254, 254)',
  },
  mhGUtest: {
    background: 'url("mhgu.png")',
    backgroundSize: '100%',
  },
  title: {
    position: 'absolute',
    top: 24,
    textAlign: 'right',
    left: 322,
    fontSize: 55,
    '-webkit-text-stroke': 'black',
    '-webkit-text-stroke-width': '2px',
  },
};

const views = {
  '3ds': ThreeDS,
  'base': Base,
};

class Graphics extends Component {

	render() {
    const { classes } = this.props;

    const query = queryString.parse(window.location.search);

    const bgColor = query.bgColor;

    const view = query.view;
    const Component = views[view];

    const props = {};

    if (bgColor) {
      props.style = {
        backgroundColor: bgColor,
      };
    }

		return (
			<div className={`${classes.root}`} {...props}>
        {/* <div className={classes.title}>
          Blenderer
        </div> */}

        <Component/>
      </div>
		);
	}
}

export default withStyles(styles)(Graphics);
