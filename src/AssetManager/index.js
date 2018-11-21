import React, { Component } from "react";
import NodeCGReplicant from "../Dashboard/NodeCGReplicant";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class AssetManager extends Component {
  state = {
    sponsors: [],
    characters: [],
    regions: [],
    tab: 0
  };

  addItem = () => {
    this.setState(prevState => {
      const newAssetList = [...(prevState.assetList || []), { foo: "bar" }];

      return {
        assetList: newAssetList
      };
    });
  };

  resetList = () => {
    this.setState({ assetList: [] });
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    const { sponsors, characters, regions, tab } = this.state;

    return (
      <div style={{ padding: 10 }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          body {
            overflow: scroll;
          }
        `
          }}
        />
        <Tabs
          style={{ marginBottom: 15 }}
          value={tab}
          onChange={this.handleTabChange}
        >
          <Tab label="Sponsors" />
          <Tab label="Regions" />
          <Tab label="Characters" />
        </Tabs>

        {tab === 0 && <div>sponsors</div>}
        {tab === 1 && <div>regions</div>}
        {tab === 2 && <div>characters</div>}
        <NodeCGReplicant
          replicantName="assetList:sponsors"
          value={sponsors}
          onNewValue={newValue => {
            this.setState({ sponsors: newValue });
          }}
        />
        <NodeCGReplicant
          replicantName="assetList:regions"
          value={regions}
          onNewValue={newValue => {
            this.setState({ regions: newValue });
          }}
        />
        <NodeCGReplicant
          replicantName="assetList:characters"
          value={characters}
          onNewValue={newValue => {
            this.setState({ characters: newValue });
          }}
        />
      </div>
    );
  }
}

export default AssetManager;
