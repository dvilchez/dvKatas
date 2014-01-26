ig.module('game.entities.enemy')
	 .requires('impact.entity', 'plugins.ai')
	 .defines(function(){
		  EntityEnemy=ig.Entity.extend({
				size:{x:18,y:40},
				offset:{x:7, y:4},
				animSheet: new ig.AnimationSheet('media/enemy.png',32,48),
				collides: ig.Entity.COLLIDES.PASSIVE,
				type: ig.Entity.TYPE.B,
				checkAgainst: ig.Entity.TYPE.A,
				health: 200,
				speed: 50,
				init: function(x,y,settings){
					 this.parent(x,y,settings);
					 ai = new ig.ai(this);
					 this.addAnim('idle',1,[0]);
					 this.addAnim('down',0.1,[0,1,2,3,2,1,0]);
					 this.addAnim('right',0.1,[8,9,10,11,10,9,8]);
					 this.addAnim('left',0.1,[4,5,6,7,6,5,4]);
					 this.addAnim('up',0.1,[12,13,14,15,14,13,12]);
				},
				update: function(){
					 var action = ai.getAction(this);
					 switch(action){
					 case ig.ai.ACTION.Rest:
						  this.currentAnim = this.anims.idle;
						  this.vel.x = 0;
						  this.vel.y = 0;
						  break;
					 case ig.ai.ACTION.MoveLeft:
						  this.currentAnim = this.anims.left;
						  this.vel.x = -this.speed;
						  break;
					 case ig.ai.ACTION.MoveRight:
						  this.currentAnim = this.anims.right;
						  this.vel.x = this.speed;
						  break;
					 case ig.ai.ACTION.MoveUp:
						  this.currentAnim = this.anims.up;
						  this.vel.y = - this.speed;
						  break;
					 case ig.ai.ACTION.MoveDown:
						  this.currentAnim = this.anims.down;
						  this.vel.y = this.speed;
						  break;
					 case ig.ai.ACTION.Attack:
						  this.currentAnim = this.anims.idle;
						  this.vel.x = 0;
						  this.vel.y = 0;
						  ig.game.getEntitiesByType('EntityPlayer')[0].receiveDamage(2, this);
						  break;
					 default:
						  this.currentAnim = this.anims.idle;
						  this.vel.x = 0;
						  this.vel.y = 0;
						  break;
					 }
					 this.parent();
				}
		  });
	 });
