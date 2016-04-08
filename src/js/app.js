(function () {
  'use strict';

  require('p2');
  require('pixi');
  require('phaser');

  var game = new Phaser.Game(288, 496, Phaser.AUTO);

  var init     = require('./states/Init');

  game.state.add('init', init);

  game.state.start('init');

}());
