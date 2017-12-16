// TODO:  Check on fullscreen

var Critterer = {};

/**
 * preload Preloader assets, setup game stage and scale, start Preloader
 * @constructor
 */
Critterer.Boot = function (game) {};

Critterer.Boot.prototype = {

    /**
     * Implements preload()
     * preload any Preloader assets
     * the preload method fires after the constructor method is complete
     * @todo display sponsor logos
     */
    preload: function () {
        this.load.image('preload_bar', 'img/hud/loader-bar.png');
        this.load.image('ground', 'img/ground.png');
    },

    /**
     * Implements create()
     * the create method fires once the preload method is complete
     */
    create: function () {
        // set max number of inputs (only one mouse, finger, curser, etc)
        this.input.maxPointers = 1;

        // set to pause the game if browser window not active
        this.stage.disableVisibilityChange = false;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    // A scale mode that shows the entire game while maintaining proportions
        this.scale.minWidth = 480;                              // Set minimum height
        this.scale.minHeight = 270;                             // Set minimum width
        this.scale.pageAlignHorizontally = true;                // Page will be horizontally aligned
        this.scale.pageAlignVertically = true;                  // Page will be vertically aligned

        this.stage.forceLandscape = true;                       // Force landscape view only
        
        //TODO: Check to see if fullscreen mode is required

        this.input.addPointer();                                // Add Pointer to game
        this.stage.backgroundColor = '#0099ff';                 // set background color

        this.state.start('Preloader');                          // Load Preloader script
    },
    update: function() {                                        // No persistance necessary on boot
        
    }
};