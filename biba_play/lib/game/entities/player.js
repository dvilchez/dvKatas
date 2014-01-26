ig.module('game.entities.player')
	 .requires(
		  'impact.entity'
	 )
	 .defines(function(){
		  EntityPlayer=ig.Entity.extend({
				size:{x:18,y:40},
				offset:{x:7, y:4},
				health:200,
				animSheet: new ig.AnimationSheet('media/player.png',32,48),
				collides: ig.Entity.COLLIDES.ACTIVE,
				type: ig.Entity.TYPE.A,
				init: function(x,y,settings){
					 this.parent(x,y,settings);
					 this.addAnim('idle',1,[0]);
					 this.addAnim('down',0.1,[0,1,2,3,2,1,0]);
					 this.addAnim('right',0.1,[8,9,10,11,10,9,8]);
					 this.addAnim('left',0.1,[4,5,6,7,6,5,4]);
					 this.addAnim('up',0.1,[12,13,14,15,14,13,12]);
				},
				update: function(){
					 this.parent();
					 if(ig.input.state('down')){
						  this.vel.y=100;
						  this.currentAnim=this.anims.down;
						  this.lastpressed = 'down';
					 }else if(ig.input.state('up')){
						  this.vel.y=-100;
						  this.currentAnim=this.anims.up;
						  this.lastpressed = 'up';
					 }else if(ig.input.state('left')){
						  this.vel.x=-100;
						  this.currentAnim=this.anims.left;
						  this.lastpressed = 'left';
					 }else if(ig.input.state('right')){
						  this.vel.x=100;
						  this.currentAnim=this.anims.right;
						  this.lastpressed = 'right';
					 }
					 else{
						  this.vel.y=0;
						  this.vel.x=0;
						  this.currentAnim=this.anims.idle;
					 }

					 if(ig.input.pressed('attack')){
						  ig.game.spawnEntity('EntityProjectile',this.pos.x,this.pos.y, {direction: this.lastpressed});
					 }
				}
 		  });
	 });
