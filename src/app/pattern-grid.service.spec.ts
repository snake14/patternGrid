import { TestBed, inject } from '@angular/core/testing';

import { PatternGridService } from './pattern-grid.service';

describe('PatternGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatternGridService]
    });
  });

  it('should be created', inject([PatternGridService], (service: PatternGridService) => {
    expect(service).toBeTruthy();
  }));
});
