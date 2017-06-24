import { Component, OnInit } from '@angular/core';
import { PatternGridService } from '../pattern-grid.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pattern-list',
    templateUrl: './pattern-list.component.html',
    styleUrls: ['./pattern-list.component.css']
})
export class PatternListComponent implements OnInit {

    allPatterns = null;

    constructor(private patternService: PatternGridService, private router: Router) { }

    ngOnInit() {
        this.patternService.getPatternGrids()
            .subscribe(allPatterns => { this.allPatterns = allPatterns; })
    }

    selectPattern(patternID) {
        this.router.navigateByUrl('/patterngrid/' + patternID)
    }
}
