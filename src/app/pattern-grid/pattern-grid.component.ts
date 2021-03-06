import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatternGridService } from '../pattern-grid.service';

@Component({
    selector: 'app-pattern-grid',
    templateUrl: './pattern-grid.component.html',
    styleUrls: ['./pattern-grid.component.css']
})
export class PatternGridComponent implements OnInit {

    patternID: number;
    name: string;
    cellGrid: cell[][] = new Array();
    width: number = 5;
    height: number = 5;
    cellSize: number = 50;
    selectedColor: string = "#ff0000";
    recentColors = new Array();

    //Constructor
    constructor(
        private patternService: PatternGridService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        //        this.recentColors.push(this.selectedColor);
        this.patternID = this.route.snapshot.params['patternID'];
        if (this.patternID) {
            // Get the patternGrid from database and populate the values
            this.getPattern();
        } else {
            // Since this is a new patternGrid, create an empty grid
            for (var i = 0; i < this.height; i++) {
                let row = new Array();
                for (var j = 0; j < this.width; j++) {
                    row.push(new cell(false));
                }
                this.cellGrid.push(row);
            }
        }
    }

    selectCell(selectedCell: cell) {
        selectedCell.selected = !selectedCell.selected;
        selectedCell.color = this.selectedColor;
    }

    colorSelected() {
        if (this.recentColors.includes(this.selectedColor, 0)) {
            this.recentColors.splice(this.recentColors.indexOf(this.selectedColor, 0), 1);
        }
        this.recentColors.unshift(this.selectedColor);
    }

    recentSelected(recentColor: string) {
        if (this.selectedColor != recentColor) {
            this.selectedColor = recentColor;
            this.colorSelected();
        }
    }

    widthChange() {
        for (let i = 0; i < this.cellGrid.length; i++) {
            let row = this.cellGrid[i];
            let diff = this.width - row.length;
            if (diff > 0) {
                for (let j = 0; j < diff; j++) {
                    row.push(new cell(false));
                }
            } else {
                for (var k = diff; k < 0; k++) {
                    row.pop();
                }
            }
        }
    }

    heightChange() {
        let heightDiff = this.height - this.cellGrid.length;
        if (heightDiff > 0) {
            for (let i = 0; i < heightDiff; i++) {
                let row = new Array();
                for (var j = 0; j < this.width; j++) {
                    row.push(new cell(false));
                }
                this.cellGrid.push(row);
            }
        } else {
            for (var j = heightDiff; j < 0; j++) {
                this.cellGrid.pop();
            }
        }
    }

    getPattern() {
        this.patternService.getPatternGrid(this.patternID.toString())
            .subscribe(patternGrid => {
                this.name = patternGrid.name;
                this.recentColors = patternGrid.recent_colors ? JSON.parse(patternGrid.recent_colors) : [];
                if (this.recentColors.length > 0) {
                    this.selectedColor = this.recentColors[0];
                }
                this.cellSize = patternGrid.cell_size;
                this.width = patternGrid.grid_width;
                this.height = patternGrid.grid_height;
                this.cellGrid = patternGrid.grid ? JSON.parse(patternGrid.grid) : [];
            }
            )
    }

    savePattern() {
        if (this.patternID) {
            // Update existing pattern grid
            this.patternService.putPatternGrid(
                {
                    id: this.patternID,
                    name: this.name,
                    grid: JSON.stringify(this.cellGrid),
                    recent_colors: JSON.stringify(this.recentColors),
                    cell_size: this.cellSize,
                    grid_width: this.width,
                    grid_height: this.height
                }
            ).subscribe(result => {
                this.router.navigateByUrl('')
                // TODO - Notify user if there is some kind of error
            });
        } else {
            // Save new pattern grid
            this.patternService.postPatternGrid(
                {
                    name: this.name,
                    grid: JSON.stringify(this.cellGrid),
                    recent_colors: JSON.stringify(this.recentColors),
                    cell_size: this.cellSize,
                    grid_width: this.width,
                    grid_height: this.height
                }
            ).subscribe(result => {
                this.router.navigateByUrl('')
                // TODO - Notify user if there is some kind of error
            });
        }
    }
}

export class cell {
    constructor(selected?: boolean) {
        this.selected = selected;
    }
    selected: boolean;
    color: string;
}