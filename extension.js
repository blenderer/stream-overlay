'use strict';

module.exports = function (nodecg) {
  const format = nodecg.Replicant('format', {defaultValue: 'singles', persistent: true});
  const eventName = nodecg.Replicant('format', {defaultValue: 'Vista Tech Those # 33', persistent: true});
  const eventLocation = nodecg.Replicant('format', {defaultValue: 'Livonia, MI', persistent: true});
  const videoGame = nodecg.Replicant('format', {defaultValue: 'Smash 4', persistent: true});

  const players = nodecg.Replicant('players', {defaultValue: {}, persistent: true});
};
