class A{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    update(a,b){
        this.a=a;
        this.b=b;
    }
}

class B extends A{
    constructor(a,b){
        super(a+1,b-1);
    }

    static getB(a,b){
        return new B(a,b);
    }
}

describe('es6', () => {
    describe('arrow', () => {
        it('should be a function shorthand', () => {
            var letters = ['a', 'b', 'c'];
            var filtered_letters = letters.filter(f=> f==='b'); 

            expect(filtered_letters.length).toBe(1);
        })
    });

    describe('classes', ()=>{
        it('may have static methods', ()=>{
            var b=B.getB(5,2);

            expect(b).toEqual(jasmine.any(B));
        });

        it('should support super calls', ()=>{
            var b=B.getB(5,2);

            expect(b.a).toBe(6);
            expect(b.b).toBe(1);
        });

        it('should support inheritance', ()=>{
            var b=B.getB(4,4);

            expect(b.a).toBe(5);
            expect(b.b).toBe(3);

            b.update(1,1);

            expect(b.a).toBe(1);
            expect(b.b).toBe(1);
        });
    });
})
