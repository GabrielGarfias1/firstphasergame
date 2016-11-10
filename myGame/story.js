/* global game phaser game_state */
/* global story */

game_state.story = function() {};

game_state.story.prototype = {
    
    preload: function(){
            game.load.image('sky', 'assets/volcano.jpg');
            game.load.spritesheet('dude', 'assets/sprite2.png', 150, 150);

    },
    create: function(){
        this.stories = ['Achilles, a bird/dinosaur creature, is living in a time\nwhere dinosaurs are ruling the Earth. Forests are\ndominating all other environments and vegetation is\nplentiful.\n\nPRESS THE UP ARROW KEY', 'Every year, the magical volcano erupts watermelon which\nis thought of as a peaceful omen. In order to honor such a\nmagnificent event, dinosaurs have a contest amongst each\nother to see who could eat 500 watermelons. Whoever\neats 500 watermelons obtains the utmost amount of\npopularity and glory.\nPRESS THE UP ARROW KEY', 'Achilles has been aspirng to part take in this contest and\neat 500 watermelons. He wants to make his mom, dad, and\nspecies proud. Please help him achieve his goal by\ncollecting 500 watermelons. Everyone thinks that he cannot\ndo it, but he knows that with the help of you, he can.\n\nPRESS THE UP ARROW KEY', 'CONTROLS:\nTHE RIGHT ARROW KEY MAKES ACHILLES MOVE RIGHT\nTHE LEFT ARROW KEY MAKES ACHILLES MOVE LEFT\nTHE UP ARROW KEY MAKES ACHILLES JUMP IN THE AIR\nWHEN HE IS TOUCHING THE GROUND\n\nPRESS THE UP ARROW KEY TO START', ""];
        this.storyIndex = 0;
        this.scene = 1;
        game.add.sprite(0, 290  , 'sky');
        this.player = game.add.sprite (335,400, 'dude');
        this.player.frame = 4;
        this.player.animations.add('still', [4, 5, 6], 3, true);

// The this.score
        this.storyText = game.add.text(16, 16, this.stories[this.storyIndex] , {
            fontSize: '30px',
            fill: '#FFFFFF'
        });
        
    this.cursors = game.input.keyboard.createCursorKeys();
    
    this.cursors.up.onDown.add(function(){
        this.storyIndex++;
    }, this);
        
    },
    update: function(){
        this.storyText.text = this.stories[this.storyIndex];
        
        
                // if (this.cursors.up.isDown&&this.scene===1) {
                //     this.scene=2;
                //     this.storyText.text='Every year, the magical volcano erupts watermelon which\nis thought of as a peaceful omen. Dinosaurs have a contest\namongst each other to see who could eat 500 watermelons.\n\n\n\n\n\n\n\n\n\nWhoever eats 500 watermelons obtains the utmost amount\nof popularity and glory.\nPRESS THE UP ARROW KEY';
                // this.storyText.text=scene[2];
                // this.storyIndex++;
                // }
                
                // else if (this.cursors.up.isDown&&this.scene===2) {
                //     this.scene=3;
                //     this.storyText.text= 'Yeah';
                // this.storyText.text=scene[3];
                // this.storyIndex++;
                // }
                
        if (this.cursors.up.isDown && this.storyIndex>3) {
            
        game.state.start('main');
        }else {
            this.player.animations.play('still');

        }
    }
    
};

game.state.add('story', game_state.story);
game.state.start('story');