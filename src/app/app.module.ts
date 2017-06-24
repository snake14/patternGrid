import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatternGridComponent } from './pattern-grid/pattern-grid.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';

const appRoutes: Routes = [
    { path: '', component: PatternListComponent },
    { path: 'patterngrid', component: PatternGridComponent },
    { path: 'patterngrid/:patternID', component: PatternGridComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        PatternGridComponent,
        PatternListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdCardModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
