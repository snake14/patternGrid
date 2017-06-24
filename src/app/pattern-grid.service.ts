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
            .catch(this.handleError);
    }

    // Get a pattern grid by ID
    getPatternGrid(patternID: string) {
        let url = "/api/patterngrid/" + patternID;
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    // Post a new pattern grid
    postVendor(patterngrid: any) {
        let url = "/api/patterngrid";
        return this.http.post(url, patterngrid)
            .map(res => res.json())
            .catch(this.handleError);
    }

    //    putVendor(updatedVendorConfig) {
    //        let url = this.custId + "/vendoraccount/" + updatedVendorConfig.pvAccountConfigID;
    //
    //        return this.http.put(url, updatedVendorConfig)
    //            .map(res => res.json())
    //            .catch(this.handleError);
    //    }

    // Delete pattern grid from database

    private handleError(error: any) {
        return Observable.throw(JSON.stringify(error));
    }
}
