/**
 * Game logic
 * @param game
 * @constructor
 * @todo refactor initial game settings into constructor, and level handler (e.g. gravity, fireRate, etc)
 */
Critterer.Game = function (game) {
    
        // establish class wide scope variables
        this.slashes;                   // Create slashes object
        this.line;                      // Create line object
        this.scoreLabel;                // Create scoreLabel object
        this.points = [];               // Create points object
        this.anim;                      // Create anim object
        //this.good_objects;
        //this.bad_objects;
    };
    
    var PausePanel = function(game, parent){
        
        Phaser.Group.call(this, game, parent);  // Create group for pause panel
    
        var backgroundColor = "0xffffff";
        var backgroundOpacity = 0.5;
        this.pause_bg = this.game.add.graphics(0,0);                        // Create graphic at position 0, 0
        this.pause_bg.beginFill(backgroundColor, backgroundOpacity);        // Setup background color and opacity
        this.pause_bg.x = 0;                                                // Set x to 0
        this.pause_bg.y = 0;                                                // Set y to 0
        this.pause_bg.drawRect(                                             // Draw rectangle
            0,                                                              // Start at x = 0
            0,                                                              // Start at y = 0
            this.game.width,                                                // Set width of object
            this.game.height                                                // Set Height of object
        );
        this.add(this.pause_bg);                                            // Add Object to Parent
    }
    update: function() {
        //FUNCTIONALITY
    }; 
    