import { TestBed } from '@angular/core/testing';

import { LegendaryDollopService } from './legendary-dollop.service';

describe('LegendaryDollopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegendaryDollopService = TestBed.get(LegendaryDollopService);
    expect(service).toBeTruthy();
  });
});
