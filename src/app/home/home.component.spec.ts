import { HomeComponent } from './home.component';

describe("Home Component", function () {

    let comp;
    let logger;

    beforeEach(function () {

        logger = jasmine.createSpyObj(["warn"]);
        logger.warn = jasmine.createSpy("warn");

        comp = new HomeComponent(logger);
    });

    it('should call warn method of logger service', function () {
        expect(logger.warn).toHaveBeenCalled();
    });


});