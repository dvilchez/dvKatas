ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	 'impact.font',
	 'game.levels.level1',
	 'game.entities.player',
	 'game.entities.enemy',
	 'impact.debug.debug',
	 'game.entities.projectile',
	 'plugins.ai'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		 // Initialize your game here; bind keys etc.
		 this.loadLevel(LevelLevel1);

		 //move your character
		 ig.input.bind(ig.KEY.UP_ARROW,'up');
		 ig.input.bind(ig.KEY.DOWN_ARROW,'down');
		 ig.input.bind(ig.KEY.LEFT_ARROW,'left');
		 ig.input.bind(ig.KEY.RIGHT_ARROW,'right');
		 ig.input.bind(ig.KEY.SPACE, 'attack');
		 
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		 // Add your own, additional update code here
		 //camera
		 var gameviewport=ig.game.screen;
		 var gamecanvas=ig.system;
		 var player=this.getEntitiesByType(EntityPlayer)[0];
		 gameviewport.x=player.pos.x - gamecanvas.width /2;
		 gameviewport.y=player.pos.y - gamecanvas.height /2;
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
