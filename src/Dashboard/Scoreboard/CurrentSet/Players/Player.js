import React, { Component } from "react";
import _keyBy from 'lodash/keyBy';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Suggest from "../../components/Suggest";

import sponsors from "../../../../Graphics/smashnsplash/scripts/sponsors";
import NodeCGReplicant from "../../../NodeCGReplicant";

import characters from "game-characters/smashultimate";

import { withStyles } from "@material-ui/core/styles";

class Player extends Component {
  onChange = (key, value) => {
    this.props.onChange({
      ...this.props.model,
      [key]: value
    });
  };

  state = {
    regionFlags: []
  };

  render() {
    const { classes, number } = this.props;
    const { sponsor, country, name, character } = this.props.model;
    const { regionFlags } = this.state;

    const regionFileNames = regionFlags.map(regionFlag => regionFlag.name);
    const regionFlagsByName = _keyBy(regionFlags, 'name');

    return (
      <React.Fragment>
        <NodeCGReplicant
          replicantName="assets:regionFlags"
          value={regionFlags}
          onNewValue={newValue => {
            this.setState({ regionFlags: newValue });
          }}
        />
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <h2>Player {number}</h2>
          </Grid>
          <Grid item container direction="row" spacing={16}>
            <Grid item>
              <Suggest
                inputProps={{
                  className: classes.sponsor,
                  label: "Sponsor"
                }}
                onChange={selection => this.onChange("sponsor", selection)}
                items={sponsors}
                inputValue={sponsor}
              />
            </Grid>
            <Grid item>
              <Suggest
                inputProps={{
                  className: classes.sponsor,
                  label: "Country"
                }}
                onChange={selection => this.onChange("country", selection)}
                items={regionFileNames}
                inputValue={country}
              />
              <img src={regionFlagsByName[country] ? regionFlagsByName[country].url : ''} alt=""/>
            </Grid>
          </Grid>
          <Grid item container direction="row" spacing={16}>
            <Grid item>
              <TextField
                label="Gamer Tag"
                value={name || ""}
                onChange={e => {
                  this.onChange("name", e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="row" spacing={16}>
            <Grid item>
              <Suggest
                inputProps={{
                  label: "Character"
                }}
                onChange={selection => this.onChange("character", selection)}
                items={characters}
                inputValue={character}
              />
            </Grid>
          </Grid>
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

export default withStyles(styles)(Player);
