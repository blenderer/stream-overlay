'use strict';

const OBSUtility = require('nodecg-utility-obs');

module.exports = function (nodecg) {
  const obs = new OBSUtility(nodecg);

  nodecg.listenFor('switch-scene', (value, ack) => {
    obs.setCurrentScene({'scene-name': value});
  });


  const format = nodecg.Replicant('format', {defaultValue: 'singles', persistent: true});
  const eventName = nodecg.Replicant('format', {defaultValue: 'Vista Tech Those # 33', persistent: true});
  const eventLocation = nodecg.Replicant('format', {defaultValue: 'Livonia, MI', persistent: true});
  const videoGame = nodecg.Replicant('format', {defaultValue: 'Smash 4', persistent: true});

  const players = nodecg.Replicant('players', {defaultValue: {}, persistent: true});

  const set = nodecg.Replicant('set', {defaultValue: {}, persistent: true});

  const bla = nodecg.Replicant('bla', {defaultValue: {hello: 'world'}, persistent: true});


  // new stuff
  const scoreboard = nodecg.Replicant('scoreboard', {
    defaultValue: {
      format: 'singles',
      eventName: 'SDI This # 33',
      eventLocation: 'Livonia, MI',
      videoGame: 'Smash 4',
      commentators: [
        {
          name: 'Script',
          sponsor: 'Gooshi',
          twitter: 'ScriptKity',
          twitch: 'ScriptKity'
        },
        {
          name: 'Sup',
          sponsor: 'Gooshi',
          twitter: 'PacmanSup',
          twitch: ''
        }
      ],
      players: [
        {
          sponsor: '',
          country: 'CL',
          name: 'Zero',
          character: 'Diddy Kong'
        },
        {
          sponsor: 'Gooshi',
          country: 'US',
          name: 'LOE1',
          character: 'Wario'
        },
        {
          sponsor: '',
          country: '',
          name: '',
          character: ''
        },
        {
          sponsor: '',
          country: '',
          name: '',
          character: ''
        }
      ],
      set: {
        format: 'bo3',
        player1: '0',
        player2: '0',
        bracketPhase: 'Pools Round 1'
      }
    },
    persistent: true
  })
};
