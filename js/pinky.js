Pinky = function (game, player) {

    var x = game.world.randomX;
    var y = game.world.randomY;

    this.game = game;
    this.player = player;

    this.pinky = game.add.sprite(x, y, 'baddie');
    //  We need to enable physics on the pinky
    this.game.physics.arcade.enable(this.pinky);

    //  Player physics properties. Give the little guy a slight bounce.
    this.pinky.body.bounce.y = 1;
    this.pinky.body.gravity.y = 900;
    this.pinky.body.bounce.x = 1;
    this.pinky.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.pinky.animations.add('left', [0, 1], 5, true);
    this.pinky.animations.add('right', [2,3], 5, true);
    this.pinky.body.velocity.x = 0;
};

Pinky.prototype.move_left = function(){
  this.pinky.body.velocity.x = -50;

  this.pinky.animations.play('left');
}

Pinky.prototype.move_right = function(){
  this.pinky.body.velocity.x = 50;

  this.pinky.animations.play('right');
}

Pinky.prototype.update = function() {
    if (this.pinky.x < this.player.x){
        this.move_right();
    }else{
        this.move_left();
    }
};
