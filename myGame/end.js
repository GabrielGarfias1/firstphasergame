/* global game phaser game_state */
game_state.end= function() {};

game_state.end.prototype = {
    
    preload: function(){
        game.load.image('sky', 'assets/volcano.jpg');
        game.load.spritesheet('dude', 'assets/sprite2.png', 150, 150);
    },
    create: function(){
        game.add.sprite(0, 290  , 'sky');
        this.player = game.add.sprite (335,400, 'dude');
        this.player.frame = 4;
        this.player.animations.add('still', [4, 5, 6], 3, true);
        this.stories = ["Excellent job! Achilles has collected 500 watermelons!\nEvery dinosaur doubted him, but you helped him overcome\nthat doubt. He's so popular now and his mom and dad are\nso proud of him. Oh, and Achilles says, 'Thank You!'\nRemember to always follow your dreams and to never give\nup no matter what other people think. Have a nice day!"];
        this.storyIndex = 0;
        this.scene = 4;

// The this.score
        this.storyText = game.add.text(16, 16, this.stories[this.storyIndex] , {
            fontSize: '30px',
            fill: '#FFFFFF'
        });
    },
    update: function(){
            this.player.animations.play('still');

        }
    }
;

game.state.add('end', game_state.end);
//game.state.start('end');