import React, { Component } from "react";
import AssetCache from "./AssetCache";
import NodeCGReplicant from "../../Dashboard/NodeCGReplicant";

const { Provider, Consumer } = React.createContext(new AssetCache([]));

export class AssetCacheProvider extends Component {
  state = {
    regionFlags: []
  };

  render() {
    const { regionFlags } = this.state;
    const assetCache = new AssetCache([
      {
        name: "regionFlags",
        assets: regionFlags
      }
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
      </React.Fragment>
    );
  }
}

export const withAssetCache = Component => props => (
  <Consumer>
    {assetCache => <Component {...props} assetCache={assetCache} />}
  </Consumer>
);
