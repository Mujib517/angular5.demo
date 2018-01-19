import { ProductDetailComponent } from './product-detail.component';
import { Observable } from 'rxjs/Observable';


describe("Product Detail Component", function () {

    let comp;
    let productSvc;
    let activatedRoute;

    beforeEach(function () {

        let obs = new Observable(o => o.next(10));

        productSvc = jasmine.createSpyObj(["getById"])
        productSvc.getById = jasmine.createSpy("getById").and.returnValue(obs);

        activatedRoute = {
            snapshot: {
                params: {
                    id: 10
                }
            }
        };

        comp = new ProductDetailComponent(productSvc, activatedRoute);

    });

    it('should have product defined', function () {
        expect(comp.product).toBeDefined();
    });

    it('should ger prouct data by calling getById of product Svc', function () {
        comp.ngOnInit();

        expect(productSvc.getById).toHaveBeenCalledWith(10);
    });
});