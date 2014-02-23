var should=require("should")
muerta = "muerta";
viva = "viva";
function celula()  {
	estado:function(){
			if(this.vecinos.length <= 3){
				return viva;
			}
			return muerta;
	},
	vecinos:{}
}


describe("celula", function(){
	var empty_client;
	var client;

	beforeEach(function(){
		
	});

	before(function(){
		
	});

	describe("estado", function(){
		it("si vecinos < 2 estado==muerta",function(){
			celula.vecinos={}
			celula.estado().should.equal(muerta);
		});

		it("si vecinos >3 estado==muerta", function(){
			celula.vecinos=[new celula(), new celula(), new celula(), new celula()];
			celula.estado().should.equal(muerta);
		});

		it("si 2 o 3 vecinos estado=viva", function(){
			celula.vecinos=[new celula(), new celula()];
			celula.estado().should.equal(viva);
		});

		it("si 3 nace", function(){
			celula.vecinos=[new celula(), new celula(), new celula()];
			celula.estado().should.equal(viva);
		});
	});
});

describe("juego", function(){
	var empty_client;
	var client;

	beforeEach(function(){
		
	});

	before(function(){
		
	});

	describe("estado", function(){
		
	});
});