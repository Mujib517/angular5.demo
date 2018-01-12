import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger.service';

@Component({
  selector: 'app-about',
  template: '<h1>About Page</h1>',
})
export class AboutComponent { 
  constructor(private logger: ConsoleLogger) {
    logger.error("Took an insane amoutn of time to load");
}
}
