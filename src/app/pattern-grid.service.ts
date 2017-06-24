import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class PatternGridService {

    constructor(private http: Http) { }

    // Get the list of pattern grids from the database
    getPatternGrids() {
        let url = "/api/patterngrids";
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.processError);
    }

    // Get a pattern grid by ID
    getPatternGrid(patternID: string) {
        let url = "/api/patterngrid/" + patternID;
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.processError);
    }

    // Post a new pattern grid
    postPattern(patterngrid: any) {
        let url = "/api/patterngrid";
        return this.http.post(url, patterngrid)
            .map(res => res)
            .catch(this.processError);
    }

    // Delete pattern grid from database

    private processError(error: any) {
        return Observable.throw(error.json());
    }
}
