import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternGridComponent } from './pattern-grid.component';

describe('PatternGridComponent', () => {
  let component: PatternGridComponent;
  let fixture: ComponentFixture<PatternGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
