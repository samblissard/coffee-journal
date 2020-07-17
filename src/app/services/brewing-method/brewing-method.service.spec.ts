import { TestBed } from '@angular/core/testing';

import { BrewingMethodService } from './brewing-method.service';

describe('BrewingMethodService', () => {
  let service: BrewingMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewingMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
