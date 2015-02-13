"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var A = (function () {
    function A(a, b) {
        _classCallCheck(this, A);

        this.a = a;
        this.b = b;
    }

    _prototypeProperties(A, null, {
        update: {
            value: function update(a, b) {
                this.a = a;
                this.b = b;
            },
            writable: true,
            configurable: true
        }
    });

    return A;
})();

var B = (function (A) {
    function B(a, b) {
        _classCallCheck(this, B);

        _get(Object.getPrototypeOf(B.prototype), "constructor", this).call(this, a + 1, b - 1);
    }

    _inherits(B, A);

    _prototypeProperties(B, {
        getB: {
            value: function getB(a, b) {
                return new B(a, b);
            },
            writable: true,
            configurable: true
        }
    });

    return B;
})(A);

describe("es6", function () {
    describe("arrow", function () {
        it("should be a function shorthand", function () {
            var letters = ["a", "b", "c"];
            var filtered_letters = letters.filter(function (f) {
                return f === "b";
            });

            expect(filtered_letters.length).toBe(1);
        });
    });

    describe("classes", function () {
        it("may have static methods", function () {
            var b = B.getB(5, 2);

            expect(b).toEqual(jasmine.any(B));
        });

        it("should support super calls", function () {
            var b = B.getB(5, 2);

            expect(b.a).toBe(6);
            expect(b.b).toBe(1);
        });

        it("should support inheritance", function () {
            var b = B.getB(4, 4);

            expect(b.a).toBe(5);
            expect(b.b).toBe(3);

            b.update(1, 1);

            expect(b.a).toBe(1);
            expect(b.b).toBe(1);
        });
    });
});
//# sourceMappingURL=es6_spec.js.map