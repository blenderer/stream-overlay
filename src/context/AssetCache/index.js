import React, { Component } from "react";
import AssetCache from "./AssetCache";
import NodeCGReplicant from "../../Dashboard/NodeCGReplicant";

const { Provider, Consumer } = React.createContext(new AssetCache([]));

export class AssetCacheProvider extends Component {
  state = {
    regionFlags: [],
    characters: [],
    playerSponsors: [],
  };

  render() {
    const { regionFlags, characters, playerSponsors } = this.state;
    const assetCache = new AssetCache([
      {
        name: "regionFlags",
        assets: regionFlags
      },
      {
        name: "characters",
        assets: characters
      },
      {
        name: "playerSponsors",
        assets: playerSponsors
      },
      
    ]);

    return (
      <React.Fragment>
        <Provider value={assetCache}>{this.props.children}</Provider>
        <NodeCGReplicant
          replicantName="assets:regionFlags"
          value={regionFlags}
          onNewValue={newValue => {
            this.setState({ regionFlags: newValue });
          }}
        />
        <NodeCGReplicant
          replicantName="assets:playerSponsors"
          value={playerSponsors}
          onNewValue={newValue => {
            this.setState({ playerSponsors: newValue });
          }}
        />
        <NodeCGReplicant
          replicantName="assets:characters"
          value={characters}
          onNewValue={newValue => {
            this.setState({ characters: newValue });
          }}
        />
      </React.Fragment>
    );
  }
}

export const withAssetCache = Component => props => (
  <Consumer>
    {assetCache => <Component {...props} assetCache={assetCache} />}
  </Consumer>
);
