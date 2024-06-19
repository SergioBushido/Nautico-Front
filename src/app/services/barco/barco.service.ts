// src/app/services/barco.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barco } from '../../models/barco/barco.model';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {
  private apiUrl = 'http://localhost:8081/barcos';

  constructor(private http: HttpClient) { }

  getBarcos(): Observable<Barco[]> {
    return this.http.get<Barco[]>(this.apiUrl);
  }

  getBarcoById(id: number): Observable<Barco> {
    return this.http.get<Barco>(`${this.apiUrl}/${id}`);
  }

  createBarco(barco: Barco): Observable<Barco> {
    return this.http.post<Barco>(this.apiUrl, barco);
  }

  updateBarco(id: number, barco: Barco): Observable<Barco> {
    return this.http.put<Barco>(`${this.apiUrl}/${id}`, barco);
  }

  deleteBarco(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
