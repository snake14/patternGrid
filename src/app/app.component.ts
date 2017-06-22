import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    cellGrid: cell[][] = new Array();
    width: number = 5;
    height: number = 5;
    cellSize: number = 50;
    selectedColor: string = "#ff0000";
    recentColor1: string = "#ff0000";
    recentColor2: string = "#00ffffff";
    recentColor3: string = "#00ffffff";

    ngOnInit() {
        for (var i = 0; i < this.height; i++) {
            let row = new Array();
            for (var j = 0; j < this.width; j++) {
                row.push(new cell(false));
            }
            this.cellGrid.push(row);
        }
    }

    selectCell(selectedCell: cell) {
        selectedCell.selected = !selectedCell.selected;
        selectedCell.color = this.selectedColor;
    }

    colorSelected() {
        this.recentColor3 = this.recentColor2;
        this.recentColor2 = this.recentColor1;
        this.recentColor1 = this.selectedColor;
    }

    recentSelected(recentColor: string) {
        if (this.recentColor1 != recentColor) {
            this.selectedColor = recentColor;
            this.colorSelected();
        }
    }

    changeSize() {
        let heightDiff = this.height - this.cellGrid.length;
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
}

export class cell {
    constructor(selected?: boolean) {
        this.selected = selected;
    }
    selected: boolean;
    color: string;
}