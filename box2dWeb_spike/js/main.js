var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;

var size=5;
var torsion=100;
var height=window.innerHeight || 
         document.documentElement.clientHeight || 
         document.body.clientHeight;
var width=window.innerWidth || 
         document.documentElement.clientWidth || 
         document.body.clientWidth;
var world_scale = 30;

var setDebugDraw = function(world){
	var debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
	debugDraw.SetDrawScale(world_scale);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	world.SetDebugDraw(debugDraw);
}

var drawGround = function(){
	var fixDef = new b2FixtureDef;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 0.2;

	var bodyDef = new b2BodyDef;
	bodyDef.type = b2Body.b2_staticBody;
	fixDef.shape = new b2PolygonShape;
	fixDef.shape.SetAsBox(width/world_scale, 0.5);
	bodyDef.position.Set((width/2)/world_scale, ((height)/world_scale)-0.25);
	world.CreateBody(bodyDef).CreateFixture(fixDef);
	fixDef.shape.SetAsBox(0.5, height/world_scale);
	bodyDef.position.Set((width/world_scale), (height/2)/world_scale);
	world.CreateBody(bodyDef).CreateFixture(fixDef);	
}

var drawCatapultBody = function(){
	
	var the_joint_itself;
	var catapult_body = new b2BodyDef();
	catapult_body.position.Set(350/world_scale,200/world_scale);
	catapult_body.type=b2Body.b2_dynamicBody;
	var main_part = new b2PolygonShape();
	main_part.SetAsOrientedBox(60/world_scale, 10/world_scale, new b2Vec2(0,0),0);
	var fixed_arm = new b2PolygonShape();
	fixed_arm.SetAsOrientedBox(10/world_scale, 30/world_scale, new b2Vec2(-40/world_scale,-20/world_scale),0);
	var catapult_itself=world.CreateBody(catapult_body);
	catapult_itself.CreateFixture2(main_part,200);
	catapult_itself.CreateFixture2(fixed_arm,200);

	return catapult_itself;
}

var drawCatapultArm = function(){
	var catapult_arm = new b2BodyDef();
	catapult_arm.allowSleep = false;
	catapult_arm.position.Set(210/world_scale,110/world_scale);
	catapult_arm.type=b2Body.b2_dynamicBody;
	var arm_part = new b2PolygonShape();
	arm_part.SetAsOrientedBox(75/world_scale, 5/world_scale, new b2Vec2(0,0),0);
	var stopper = new b2PolygonShape();
	stopper.SetAsOrientedBox(5/world_scale, 10/world_scale, new b2Vec2(-70/world_scale,-15/world_scale),0);
	var catapult_arm_itself=world.CreateBody(catapult_arm);
	catapult_arm_itself.CreateFixture2(arm_part,1);
	catapult_arm_itself.CreateFixture2(stopper,1);

	return catapult_arm_itself;
}

var createCatapultJoint = function(body, arm){
	var arm_joint = new b2RevoluteJointDef();
	arm_joint.enableMotor = true;
	arm_joint.enableLimit = true;
	arm_joint.Initialize(body, arm,new b2Vec2(0,0));
	arm_joint.localAnchorA=new b2Vec2(-40/world_scale,-45/world_scale);
	arm_joint.localAnchorB=new b2Vec2(30/world_scale,0);

	the_joint_itself=world.CreateJoint(arm_joint);
	the_joint_itself.SetMotorSpeed(1000);
	the_joint_itself.SetLimits(-Math.PI,Math.PI/3);
	the_joint_itself.SetMaxMotorTorque(1) 

	return the_joint_itself;
}

var createBall = function(catapult){
    var cannonball= new b2BodyDef();
    cannonball.position.Set(catapult.GetPosition().x-2, 45/world_scale);
    cannonball.type=b2Body.b2_dynamicBody;
    var the_cannonball_itself=world.CreateBody(cannonball);

    var myFixture = new b2FixtureDef;
    myFixture.shape = new b2CircleShape(size/world_scale);
    myFixture.density=10;

    this.fixture=the_cannonball_itself.CreateFixture(myFixture);
}

var world = new b2World(new b2Vec2(0,10), true);
setDebugDraw(world);
drawGround();
var catapult = drawCatapultBody();
var arm = drawCatapultArm();

var catapult_joint = createCatapultJoint(catapult, arm);

createBall(catapult);



window.setInterval(update, 1000 / 60);

function reset(){
	catapult_joint.SetMaxMotorTorque(1);
	create_ball(this);
}

function right(){
	catapult.SetPosition(new b2Vec2(catapult.GetPosition().x+0.5,catapult.GetPosition().y));
}

function left(){
	catapult.SetPosition(new b2Vec2(catapult.GetPosition().x-0.5,catapult.GetPosition().y));
}

function fire(){
	catapult_joint.SetMaxMotorTorque(torsion);
}

var createWorld=function(){

}

function update() {
	world.Step(1 / 60, 10, 10);
	world.DrawDebugData();
	world.ClearForces();
};

function moreSize(){
	size+=1;
	document.getElementById('size').innerHTML=size;
}

function lessSize(){
	if(size>0){
		size-=1;
		document.getElementById('size').innerHTML=size;	
	}
}

function moreTorsion(){
	torsion+=10;
	document.getElementById('torsion').innerHTML=torsion;
}

function lessTorsion(){
	if(torsion>10){
		torsion-=10;
		document.getElementById('torsion').innerHTML=torsion;	
	}
}

document.getElementById('canvas').height=height;
document.getElementById('canvas').width=width;