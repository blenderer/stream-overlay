import React, { Component } from "react";
import _keyBy from 'lodash/keyBy';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Suggest from "../../components/Suggest";
import { withAssetCache } from '../../../../context/AssetCache';

import sponsors from "../../../../Graphics/smashnsplash/scripts/sponsors";

import characters from "game-characters/smashultimate";

import { getPlayerAssetUrls } from '../../../../helpers/getPlayerAssetUrls';

import { withStyles } from "@material-ui/core/styles";

class Player extends Component {
  onChange = (key, value) => {
    this.props.onChange({
      ...this.props.model,
      [key]: value
    });
  };

  render() {
    const { classes, number, assetCache, model } = this.props;
    const { sponsor, country, name, character } = this.props.model;

    const imageUrls = getPlayerAssetUrls(assetCache, model);

    return (
      <React.Fragment>
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
                items={assetCache.nameList.playerSponsors}
                inputValue={sponsor}
              />
              <img className={classes.previewImages} src={imageUrls.sponsor} alt=""/>
            </Grid>
            <Grid item>
              <Suggest
                inputProps={{
                  className: classes.sponsor,
                  label: "Country"
                }}
                onChange={selection => this.onChange("country", selection)}
                items={assetCache.nameList.regionFlags}
                inputValue={country}
              />
              <img className={classes.previewImages} src={imageUrls.country} alt=""/>
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
                items={assetCache.nameList.characters}
                inputValue={character}
              />
              <img className={classes.previewImages} src={imageUrls.character} alt=""/>
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
  },
  previewImages: {
    width: 50,
  },
});

export default withAssetCache(withStyles(styles)(Player));
