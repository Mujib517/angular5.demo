import { ProductService } from './product.service';


describe("Product Service", function () {
    let svc: ProductService;
    let logger;
    let http;

    beforeEach(() => {

        http = jasmine.createSpyObj(["get"]);
        http.get = jasmine.createSpy("get");

        logger = jasmine.createSpyObj(["info"]);

        svc = new ProductService(http, logger);
    });

    it('should make a webservice call to get data by id', () => {
        
        svc.getById("10");

        expect(http.get).toHaveBeenCalledWith("https://exp-rest-api.herokuapp.com/api/products/10");
    });
});