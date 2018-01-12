import { Injectable } from "@angular/core";


@Injectable()
export class ConsoleLogger {

    log(msg) {
        console.log(msg);
    }

    warn(msg) {
        console.warn(msg);
    }

    error(msg) {
        console.error(msg);
    }

    info(msg) {
        console.info(msg);
    }
}