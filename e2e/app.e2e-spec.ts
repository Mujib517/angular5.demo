import { browser, element, by } from 'protractor';

describe("Home Page", function () {

    browser.get('/');

    it("should have title Angular5Demo", function () {
        expect(browser.getTitle()).toBe("Angular5Demo");
    });

    it('should have heading Home Page', function () {
        let headings = element.all(by.css("h1"));
        let h1 = headings.get(0);
        expect(h1.getText()).toBe("Home Page");
    });

    it('should navigate to about page', function () {
        let anc = element(by.css('a[href="/about"]'));
        anc.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/about");
    });

    it('should increment the value of count when inc button is clicked', function () {
        var btn = element(by.css("button"));
        btn.click();
        var headings = element.all(by.css('h1'));
        var h1 = headings.get(1);
        expect(h1.getText()).toEqual('1') //===
    });

    it('should navigate to about page', function () {
        let anc = element(by.css('a[href="/products"]'));
        anc.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    });

    it('should navigate to product detail page', () => {
        let anc = element(by.css('a[href="/products"]'));
        anc.click();
       
        let wells = element.all(by.css(".well"));
        let well = wells.get(0);
        let ancProduct = well.element(by.css("a"));

        ancProduct.click();
    });

    // it('should add a product and navigate back to products page', () => {
    //     let btn = element(by.css(".btn.btn-danger"));
    //     btn.click();

    //     let btnSave = element(by.css(".btn.btn-success"));
    //     expect(btnSave.isEnabled()).toBe(false);
    // });

    // it('should add a product and navigate back to products page', () => {

    //     let txtBrand = element(by.css('input[formcontrolname="brand"]'));
    //     let txtModel = element(by.css('input[formcontrolname="model"]'));
    //     let txtPrice = element(by.css('input[formcontrolname="price"]'));

    //     txtBrand.clear();
    //     txtBrand.sendKeys("Samsung");
    //     txtModel.sendKeys("Galaxy S9");
    //     txtPrice.sendKeys("800");

    //     let btnSave = element(by.css(".btn.btn-success"));
    //     expect(btnSave.isEnabled()).toBe(true);
    // });

   

    // it("should take me back to products page", () => {
    //     let btnSave = element(by.css(".btn.btn-success"));
    //     expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    // });
});