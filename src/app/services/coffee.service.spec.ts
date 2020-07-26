import { TestBed } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Coffee } from '../models/coffee';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CoffeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getAll', () => {
    it('should make a GET call to the coffee endpoint', () => {
      service.getAll().subscribe();
      const req = httpMock.expectOne('http://localhost:3000/coffee/');
      expect(req.request.method).toBe('GET');
    });

    it('should return the list of coffees', () => {
      const fakeCoffees: Coffee[] = [
        {
          id: 1,
          name: 'Good coffee',
          roaster: 'Good',
          tastingNotes: [],
          roast: 'Dark',
        },
        {
          id: 2,
          name: 'Good coffee',
          roaster: 'Good',
          tastingNotes: [],
          roast: 'Light',
        },
      ];

      service.getAll().subscribe((coffees) => {
        expect(coffees).toBe(fakeCoffees);
      });

      const req = httpMock.expectOne('http://localhost:3000/coffee/');
      req.flush(fakeCoffees);
    });
  });
});
