import { TestBed } from '@angular/core/testing';

import { JournalEntryService } from './journal-entry.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { JournalEntry } from '../models/journal-entry';

describe('JournalEntryService', () => {
  let service: JournalEntryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(JournalEntryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('should make a POST call to the journal-entry endpoint', () => {
      const journalEntry: JournalEntry = {
        coffee: {
          id: 0,
          name: 'good',
          roast: 'good',
          roaster: 'good',
          tastingNotes: [],
        },
        brewingMethod: 'v60',
        coffeeWeight: 1,
        waterWeight: 1,
        grindSetting: 1,
      };

      service.create(journalEntry).subscribe();

      const req = httpMock.expectOne('http://localhost:3000/journal-entry/');

      expect(req.request.method).toBe('POST');
    });
  });
});
