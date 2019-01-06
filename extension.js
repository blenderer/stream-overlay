'use strict';

const OBSUtility = require('nodecg-utility-obs');

module.exports = function (nodecg) {
  const obs = new OBSUtility(nodecg);

  nodecg.listenFor('bobs:send', (props, ack) => {
    return obs.send(props.eventName, props).then(res => {
      if (ack && !ack.handled) {
          ack(null, res);
      }
    }).catch(err => {
      ack(err);
    });
  });

  nodecg.listenFor('switch-scene', (value) => {
    obs.setCurrentScene({'scene-name': value});
  });


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
        score: {
          team1: [false, false, false, false, false],
          team2: [false, false, false, false, false],
        },
        bracketPhase: 'Pools Round 1'
      }
    },
    persistent: true
  })
};
