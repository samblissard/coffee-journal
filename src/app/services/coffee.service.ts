import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from '../models/coffee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private readonly server: string = 'http://localhost:3000';
  private readonly endpoint: string = `${this.server}/coffee/`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.endpoint);
  }
}
