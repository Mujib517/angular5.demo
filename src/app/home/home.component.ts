import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger.service";


@Component({
    selector: 'app-home', //kebab casing
    templateUrl: './home.html'

})
export class HomeComponent {

    constructor(private logger: ConsoleLogger) {
        logger.warn("Took a lot of time to load");
    }
}