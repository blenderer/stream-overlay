import React, { Component } from "react";
import { AssetCacheProvider } from '../context/AssetCache';
import Scoreboard from "./Scoreboard";

class Dashboard extends Component {
  render() {
    return (
      <AssetCacheProvider>
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
          <nodecg-widget-obs />
          <Scoreboard />
        </div>
      </AssetCacheProvider>
    );
  }
}

export default Dashboard;
