import { Component } from '@angular/core';
import { PatternGridService } from './pattern-grid.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [PatternGridService]
})
export class AppComponent {

}