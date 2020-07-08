import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JournalEntry } from '../models/journal-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalEntryService {
  private readonly server: string = 'http://localhost:3000';
  private readonly endpoint: string = `${this.server}/journal-entry/`;

  constructor(private http: HttpClient) {}

  create(journalEntry: JournalEntry): Observable<JournalEntry> {
    return this.http.post<JournalEntry>(this.endpoint, journalEntry);
  }
}
