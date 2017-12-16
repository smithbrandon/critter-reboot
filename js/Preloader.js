//TODO: Nothing, Passed Tests

/**
 * Declare Preloader Class
 * @param game
 * @constructor
 */
Critterer.Preloader = function(game) {
    this.preload_bar = null;                // set preloader_bar variable
    this.loader_lbl = null;                 // set preloader_lbl variable
    this.game_play_btn = null;              // set game_play_btn variable 
    this.ready = false;                     // set document ready status = false
};

Critterer.Preloader.prototype = {

    /**
     * Implements preload()
     * preload all remaining game assets
     */
    preload: function () {

        this.loader_lbl = this.add.text(        // set loader_lbl to have text
            this.world.centerX,                 // center loader_lbl on x-axis
            this.world.centerY - 50,            // center loader_lbl 50px below center on y-axis
            "",                                 // Set text to be blank
            {
                size: "32px",                   // font size is 32px
                fill: "#FFF",                   // font color White
                align: "center"                 // center align text
            }
        );
        this.loader_lbl.anchor.setTo(0.5,0.5);  // set anchor point of loader_lbl object to be center x and y

        this.preload_bar = this.add.sprite(     // create preload_bar
            this.world.centerX,                 // Center preload_bar on the x axis
            this.world.centerY +50,             // center preload_bar 50px above the center on the y-axis
            'preload_bar'                       // use the preload_bar asset
        );  
        this.preload_bar.anchor.setTo(0.5, 0.5);    // set anchor point of the preload_bar object to be center x and y
        this.load.setPreloadSprite(this.preload_bar);   // setup prgress bar for loading

        // pre load assets for the rest of the game (e.g. Main Menu, Game, etc.)
        this.load.image('scorpion', 'img/sprites/emperor-scorpion.png');
        this.load.image('cockroach', 'img/sprites/madagascar-hissing-cockroach.png');
        this.load.image('stick', 'img/sprites/walking-stick.png');
        this.load.image('critterer_logo', 'img/critterer-logo.png');
        this.load.image('game_play_btn', 'img/hud/play-icon.png');
        this.load.image('btnPause', 'img/hud/pause.png');
	    this.load.image('panel', 'img/hud/pause-modal.png');
	    this.load.image('restart_btn', 'img/hud/restart-icon.png');
        this.load.image('menu_btn', 'img/hud/menu-icon.png');
        this.load.video('scorpion', 'https://vimeo.com/112414428');
        this.load.video('walking_stick', 'https://vimeo.com/111256268');
        this.load.video('Walking_Stick_Breathe','https://vimeo.com/111256267');
        this.load.video('Walking_Stick_do','https://vimeo.com/111256266');
        this.load.video('Walking_Sticks_live','https://vimeo.com/111256265');
    },

    /**
     * Implements create()
     * once all assets are loaded, we can turn off cropping preload bar
     */
    create: function () {
        this.preload_bar.cropEnabled = false;           // turn off cropping on progress bar
        this.loader_lbl.setText("Loading . . .");       // load text to loader_lbl
    },

    /**
     * Implements update()
     * the update method fires constantly when the create method is complete
     * simply let the game know all assets loaded. we're ready.
     */
    update: function () {
        this.ready = true;              // Set document ot ready
        this.state.start('MainMenu');   // Load Main Menu game state
    }
}
