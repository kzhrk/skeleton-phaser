/*!
 * @fileOverview Sample
 * @author Kazuhiro Kobayashi
 */
function Sample (game, x, y, frame) {
  'use strict';
}

Sample.prototype = Object.create(Phaser.Sprite.prototype);
Sample.prototype.constructor = Sample;

Sample.prototype.action1 = function () {
};
Sample.prototype.action2 = function () {
};

module.exports = Sample;
