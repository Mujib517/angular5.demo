import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[dlIf]',
    inputs: ['dlIf']
})
export class IfDirective {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

    set dlIf(val: boolean) {
        if (val) {
            this.container.createEmbeddedView(this.template);
        }
        else{
            this.container.clear();
        }
    }
}
