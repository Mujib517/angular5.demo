import { Directive, ElementRef, Renderer } from "@angular/core";


@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {

    constructor(private el: ElementRef, private render: Renderer) { }

    set dlShow(val: boolean) {
        //this.el.nativeElement.style.display = val ? "block" : "none";
        this.render.setElementStyle(this.el.nativeElement, "display", val ? "block" : "none");
    }

    //<h1 [dlShow]></h1>
}