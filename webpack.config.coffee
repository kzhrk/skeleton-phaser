path = require 'path'

phaserModule = path.join(__dirname, '/node_modules/phaser/')
phaser = path.join(phaserModule, 'build/phaser.js')
pixi = path.join(phaserModule, 'build/custom/pixi.js')
p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports =
  entry:
    'app': [
      './src/js/app.js'
    ]

  module:
    loaders: [{
      test: /pixi\.js/
      loader: 'expose?PIXI'
    },{
      test: /phaser\.js/,
      loader: 'expose?Phaser'
    },{
      test: /p2\.js/
      loader: 'expose?p2'
    }]

  output:
    path: './public/js'
    filename: '[name].bundle.js'

  resolve:
    extensions: ['', '.js']
    alias:
      phaser: phaser
      pixi: pixi
      p2: p2

  devtool: 'inline-source-map'
