import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { black } from "chalk";

const styles = {
  title: {
    position: 'absolute',
    left: 18,
    top: 5,
    margin: 0,
    fontSize: 65,
  },
  subTitle: {
    position: 'absolute',
    left: 423,
    top: 17,
    margin: 0,
    fontSize: 19,
    width: 308,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  subTitle2: {
    position: 'absolute',
    left: 764,
    top: 17,
    margin: 0,
    fontSize: 19,
    color: 'black',
    width: 473,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  titleBar: {
    position: "absolute",
    top: 0,
    left: -44,
    width: 442,
    height: 90,
    backgroundColor: "rgba(50, 50, 50, 0.8)",
    transform: "skew(-30deg)"
  },
  subTitleBar: {
    position: "absolute",
    height: 52,
    width: 333,
    backgroundColor: 'rgba(255, 128, 0, 0.8)',
    top: 0,
    left: 410,
    transform: "skew(-30deg)"
  },
  subTitle2Bar: {
    position: "absolute",
    height: 52,
    width: 508,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    top: 0,
    left: 743,
    transform: "skew(-30deg)"
  },
  webcamBox: {
    position: "absolute",
    border: '7px solid white',
    boxSizing: 'border-box',
    bottom: 24,
    left: 24,
    width: 332,
    height: 252,
  },
};

class Base extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
          libero ut? Assumenda deserunt natus et non accusamus ducimus doloribus
          est totam numquam. Eius placeat doloremque sed labore, totam illo
          atque.
        </p> */}
        <div className={classes.titleBar}/>
        <div className={classes.subTitleBar}/>
        <div className={classes.subTitle2Bar}/>
        <h1 className={classes.title}>Blenderer</h1>
        <h2 className={classes.subTitle}>Now Playing: Smash</h2>
        <h2 className={classes.subTitle2}>Latest Follower: GooshiGaming</h2>
        <div className={classes.webcamBox}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Base);
