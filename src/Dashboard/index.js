import React, { Component } from "react";
import { AssetCacheProvider } from '../context/AssetCache';
import Scoreboard from "./Scoreboard";

class Dashboard extends Component {
  componentDidMount() {
    setTimeout(() => {
      nodecg.sendMessage('bobs:send', {
        eventName: 'SetSceneItemProperties',
        sceneName: 'switch + webcam + basic graphic',
        item: 'logitech',
        visible: false
      }).then(() => {
          console.log('successfully set to hidden');
      }).catch(err => {
          console.error('failed to set hidden:', err);
      });
    }, 5000);
    setTimeout(() => {
      nodecg.sendMessage('bobs:send', {
        eventName: 'SetSceneItemProperties',
        sceneName: 'switch + webcam + basic graphic',
        item: 'logitech',
        visible: true
      }).then(() => {
          console.log('successfully set to visible');
      }).catch(err => {
          console.error('failed to set visible:', err);
      });
    }, 10000);
  }

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
          {/* <Scoreboard /> */}
          
        </div>
      </AssetCacheProvider>
    );
  }
}

export default Dashboard;
