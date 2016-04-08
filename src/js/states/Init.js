/*!
 * @fileOverview Init
 * @author Kazuhiro Kobayashi
 */
function Init () {
  this.asset = null;
  this.ready = false;
}

Init.prototype = {
  preload: function () {
    // load image
    this.load.image('preloader', 'assets/img/preloader.gif');

    // load audio

    // loading
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
  },
  create: function () {
    this.asset.cropEnabled = false;
  },
  update : function () {
    if(!!this.ready) {
      console.log('ready');
      // this.game.state.start('start');
    }
  },
  onLoadComplete: function () {
    this.ready = true;
  }
};

module.exports = Init;
