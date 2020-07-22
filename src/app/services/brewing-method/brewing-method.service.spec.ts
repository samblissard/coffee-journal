import { TestBed } from '@angular/core/testing';

import { BrewingMethodService } from './brewing-method.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { BrewingMethod } from '../../models/brewing-method';

describe('BrewingMethodService', () => {
  let service: BrewingMethodService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BrewingMethodService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should make a GET call to the brewing method endpoint', () => {
      service.getAll().subscribe();
      const req = httpMock.expectOne('http://localhost:3000/brewing-method/');
      expect(req.request.method).toBe('GET');
    });

    it('should return the list of brewing methods', () => {
      const fakeBrewingMethods: BrewingMethod[] = [
        {
          id: 1,
          description: 'v60',
        },
      ];

      service.getAll().subscribe((methods) => {
        expect(methods).toBe(fakeBrewingMethods);
      });

      const req = httpMock.expectOne('http://localhost:3000/brewing-method/');
      req.flush(fakeBrewingMethods);
    });
  });
});
