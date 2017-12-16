window.onload = function () {
    /**
     *      Width of Game = 540px
     *      Height of Game = 960px
     *      Phaser rendering context = Phaser.AUTO
     *      Game container id = 'game_container
     **/

    var game = new Phaser.Game(960, 540, Phaser.AUTO, 'game_container');

    // add game states
    game.state.add('Boot', Critterer.Boot);
    game.state.add('Preloader', Critterer.Preloader);
    game.state.add('MainMenu', Critterer.MainMenu);
    game.state.add('Game', Critterer.Game);
    
    // game.state.add('scorpion', Critterer.Scorpion);
    // game.state.add('beetle', Critterer.Scorpion);
    // game.state.add('stick', Critterer.Scorpion);

    game.state.add('CutScene', Critterer.CutScene);
    game.state.add('GameOver', Critterer.GameOver);
    
    // initiate game at Boot state
    game.state.start('Boot');

}