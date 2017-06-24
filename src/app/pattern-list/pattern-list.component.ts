import { Component, OnInit } from '@angular/core';
import { PatternGridService } from '../pattern-grid.service';

@Component({
    selector: 'app-pattern-list',
    templateUrl: './pattern-list.component.html',
    styleUrls: ['./pattern-list.component.css']
})
export class PatternListComponent implements OnInit {

    allPatterns = null;

    constructor(private patternService: PatternGridService) { }

    ngOnInit() {
        this.patternService.getPatternGrids()
            .subscribe(allPatterns => { this.allPatterns = allPatterns; })
    }
}
