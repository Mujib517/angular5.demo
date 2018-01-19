import { ContactComponent } from './contact.component';

describe("Contact Component", function () {

    let comp;

    beforeEach(function () {
        comp = new ContactComponent();
    });


    it('should have count defined', function () {
        expect(comp.count).toBeDefined();
    });

    it('should have value zero', function () {
        expect(comp.count).toBe(0);
    });

    it('should have count undefined', function () {
        expect(comp.count2).toBeUndefined();
    });

    afterEach(function () {
        comp = null;
    })

});