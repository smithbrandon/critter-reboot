/**
 * Declare MainMenu class
 * @param game
 * @constructor
 */
Critterer.MainMenu = function(game) {
    
    };
    
    Critterer.MainMenu.prototype = {
    
        /**
         * Implements preload()
         */
        preload: function() {
            this.critterer_logo = null;         // Setup critterer_Logo Object
            this.main_menu_play_btn = null;     // Setup mein_menu_play_btn Object
            this.scorpion_btn = null;           // Setup Scorpion_btn Object
            this.beetle_btn = null;             // Setup Beetle_btn Object
            this.stick_btn = null;              // Setup stick_btn Object
        },
    
        /**
         * Implements create()
         */
        create: function() {
            // Display Ground
            this.ground = this.add.sprite(      // Add sprite to gound object
                -4,                             // position ground -4 px below viewport
                this.world.height - 75,         // position ground 75 px below viewport
                    'ground'                       // Use the preloaded asset ground
            );
            this.ground.width = this.game.width + 8;    // Set width of ground to 8 px wider than viewport   

            // Display Critterer Logo
            this.critterer_logo = this.add.sprite(  // Add sprite to Critter logo
                this.world.centerX,                 // position logo centered on x-axis
                this.world.centerY - 75,            // position logo 75 px below y-axis center
                'critterer_logo'                    // Use preloaded asset critterer_logo
            );
            this.critterer_logo.anchor.setTo(0.5, 0.5); // Anchor Critter logo to center x, y
            this.critterer_logo.alpha = 0;              // Set opacity of logo to transparent

            //Fade in critter logo
            var logo_tween = this.add.tween(this.critterer_logo);   // Add tween to logo

            // sprite_name.to({x: x, y: y}, duration, easing, autostart, delay);
            logo_tween.to(
                { alpha: 1 },                       // Set logo to opaque
                500,                                // Duration of transition 500ms
                Phaser.Easing.Linear.None,          // Easing type
                true,                               // Autostart
                100                                 // Delay 100ms
            ); 

            this.main_menu_play_btn = this.add.image(
                this.world.centerX,                     // Center main_menu_play_btn on x-axis
                this.world.centerY + 35,                // Center main_menu_play_btn 35px above center
                'game_play_btn'                         // Load asset game_play_btn
            );

            this.main_menu_play_btn.anchor.setTo(0.5, 0.5); // Set anchor point to center
            this.main_menu_play_btn.alpha = 0;              // Set main_menu_play_btn to transparent
            this.main_menu_play_btn.inputEnabled = true;    // Enable play button
            this.main_menu_play_btn.events.onInputDown.addOnce(this.startGame, this);   //  Allow click event once

            var play_tween = this.add.tween(this.main_menu_play_btn);   // Add tween to menu button

            // sprite_name.to({x: x, y: y}, duration, easing, autostart, delay);
            play_tween.to(
                { alpha: 1 },                       // Set Menu to opaque
                400,                                // Duration of transition 400ms
                Phaser.Easing.Linear.None,          // Easing type
                true,                               // autostart
                400                                 // delay 400ms
            );
        },

        startGame: function() {              
            this.state.start('Game');               // Change game state to Game
        },

        randomFunction: function() {

        },
        /**
         * Implements update()
         */
        update: function() {

        }
    };