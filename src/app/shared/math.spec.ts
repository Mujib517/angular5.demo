import { MathService } from './math';

//jasmine.TDD test driven develoment

describe("Math Service", function () {
    var svc;

    beforeEach(function () {
        svc = new MathService();
    });

    describe("add()", function () {
        it("should add two numbers", function () {
            let result = svc.add(10, 20); //Act
            expect(result).toBe(30); //Assert. Actual==expected
        });

        it("should return 0 when first parameter is zero", function () {
            let result = svc.add(0, 100);
            expect(result).toBe(0);
        });

        it('should return -1 when second parameter is zero', function () {
            var result = svc.add(100, 0);

            expect(result).toBe(-1);
        });
    })
    //red-green-refactor


    describe("sub()", function () {
        it("should sub two numbers", function () {
            var result = svc.sub(20, 10);
            expect(result).toBe(10);
        });
    });


    afterEach(function () {
        svc = null;
    });


});