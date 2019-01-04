import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  titleContainer: {
    padding: 15,
    width: 340,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  title: {
    fontSize: 53,
    margin: 0,
  },
  tagLine: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    margin: 0,
    paddingLeft: 20,
  },
  centeredContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    top: 0,
    bottom: 0
  },
  top: {
    border: "4px solid #654321",
    height: 360,
    width: 600
  },
  bottom: {},
  webcam: {}
};

const views = {
  "3ds": ThreeDS
};

class ThreeDS extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.centeredContainer}>
          <div className={classes.top} />
        </div>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Blenderer</h1>
          <h2 className={classes.tagLine}>The one who blends...</h2>
        </div>
      </React.Fragment>

      // <div className={classes.bottom}></div>
      // <div className={classes.webcam}></div>
    );
  }
}

export default withStyles(styles)(ThreeDS);
