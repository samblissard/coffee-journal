import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrewingMethod } from '../../models/brewing-method';

@Injectable({
  providedIn: 'root',
})
export class BrewingMethodService {
  private readonly server: string = 'http://localhost:3000';
  private readonly endpoint: string = `${this.server}/brewing-method/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<BrewingMethod[]> {
    return this.http.get<BrewingMethod[]>(this.endpoint);
  }
}
