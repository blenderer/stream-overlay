import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Commentator from "./Commentator";

import { withStyles } from "@material-ui/core/styles";

class Commentary extends Component {
  handleChange = (index, value) => {
    const { scoreboard } = this.props;
    const newCommentators = [...scoreboard.commentators];

    newCommentators[index] = value;

    this.props.onChange({
      ...scoreboard,
      commentators: newCommentators
    });
  };

  swap = () => {
    const { scoreboard } = this.props;
    const newCommentators = [...scoreboard.commentators];

    const temp = newCommentators[0];
    newCommentators[0] = newCommentators[1];
    newCommentators[1] = temp;

    this.props.onChange({
      ...scoreboard,
      commentators: newCommentators
    });
  };

  render() {
    const { scoreboard } = this.props;

    return (
      <React.Fragment>
        <div>
          <Button onClick={this.swap} variant="contained">
            Swap Sides
          </Button>
        </div>
        <Grid container direction="row" spacing={16}>
          {scoreboard.commentators.map((commentator, index) => (
            <Grid key={index} item>
              <Commentator
                number={index}
                model={commentator}
                onChange={value => {
                  this.handleChange(index, value);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

const styles = theme => ({
  sponsor: {
    width: 60
  }
});

export default withStyles(styles)(Commentary);
