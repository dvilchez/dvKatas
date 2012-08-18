var should=require("should")

describe("Object", function(){
	var empty_client;
	var client;

	beforeEach(function(){
		empty_client={};
		client={
			name:"David",
			address:{
						street: "Gran Via",
						number: "197"
					}
		};
	});

	before(function(){
		if (typeof Object.beget !== 'function') {
			    Object.beget = function (o) {
     			var F = function () {};
     			F.prototype = o;
     			return new F();
 			};   			
		};
	});

	describe("create", function(){
		it("object literal provide very convenient notation for creating new object values",function(){
			empty_client.should.be.a("object");
		});
		it("property value can be any expression", function(){
			client.should.have.property("name");
			client.should.have.property("address");
		});
	});

	describe("retrieval",function(){
		it("value can be retrieved by [ ] or . notation", function(){
			client["name"].should.equal("David");
			client.name.should.equal("David");
		});
		it("the undefined value is produced if an attempt is made to retrieve a nonexistent member", function(){
			should.strictEqual(undefined, empty_client.name);
		});
		it("the || operator can be used to fill in default values", function(){
			var name=empty_client.name || "David";
			name.should.equal("David");
		});
		it("attempting to retrieve values from undefined will throw a TypeError exception", function(){
			(function(){empty_client.name.first}).should.throw();
		});
		it("TypeError can be guarded against with the && operator", function(){
			should.equal(undefined,(empty_client.name && empty_client.name.first));
		});
	});

	describe("update", function(){
		it("a value can be updates by assignment", function(){
			client.name="Juan";
			client.name.should.equal("Juan");
		});
		it("if the object does not already have the property name is augmented", function(){
			empty_client.name="David";
			empty_client.should.have.property("name");
		});
	});

	describe("reference",function(){
		it("object are passed around by reference", function(){
			var client2=client;
			client2.name="Juan";
			client.name.should.equal("Juan");
		});
	});

	describe("prototype", function(){
		it("every object is linked to a prototype object", function(){
			should.exist(Object.getPrototypeOf(empty_client));		
		});		
		it("all objects created from object literal are linked to Object.prototype", function(){
			Object.getPrototypeOf(empty_client).should.be.equal(Object.prototype);	
		});
		it("the prototype can be definied on create", function(){
			Object.getPrototypeOf(Object.beget(client)).should.be.equal(client);
		});
		it("the property link has no effect on update", function(){
			var another_client=Object.beget(client);
			another_client.name="María";
			client.name.should.be.equal("David");
		});
		it("if the desired property exist nowhere on the prototype chain, the result is the undefined value", function(){
			should.equal(undefined,empty_client.phone);
		});
		it("the prototype relationship is dynamic", function(){
			var another_client=Object.beget(client);
			should.equal(undefined, another_client.phone);
			client.phone="000-000-000";
			another_client.phone.should.be.equal("000-000-000");
		});
	});

	describe("reflection",function(){
		it("the typeof operator can be very helpful in determining the type of a property", function(){
			(typeof client.name).should.be.equal("string");
		});
		it("")
	});
});