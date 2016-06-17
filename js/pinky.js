Pinky = function (game, player, type) {

    var x = game.world.randomX;
    var y = _.random(1, 500);


    this.badboy = type == "badboy" ? true : false;
    var color = this.badboy ? "pinky" : "greeny";
    this.game = game;
    this.player = player;
    this.velocity = _.random(0, 100);
    this.alive = true;
    this.type = type;
    this.pinky = game.add.sprite(x, y, color);

    this.game.physics.arcade.enable(this.pinky);

    this.pinky.body.bounce.y = 1;
    this.pinky.body.gravity.y = 900;
    this.pinky.body.bounce.x = 1;
    this.pinky.body.collideWorldBounds = true;

    this.pinky.animations.add('left', [0, 1], 5, true);
    this.pinky.animations.add('right', [2,3], 5, true);
    this.pinky.body.velocity.x = 0;
};

Pinky.prototype.move_left = function(){
  this.pinky.body.velocity.x = -this.velocity;

  this.pinky.animations.play('left');
}

Pinky.prototype.move_right = function(){
  this.pinky.body.velocity.x = this.velocity;

  this.pinky.animations.play('right');
}

Pinky.prototype.update = function() {
    if (this.pinky.x < this.player.x){
        this.move_right();
    }else{
        this.move_left();
    }
    if (this.pinky.body.touching.down)
    {
        this.pinky.body.velocity.y = -600;
    }
};
