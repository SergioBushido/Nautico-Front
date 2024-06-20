// src/app/services/socio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio, Barco } from '../../models/socio/socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private apiUrl = 'http://localhost:8081/api/v1/socios';

  constructor(private http: HttpClient) { }

  getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(`${this.apiUrl}`);
  }

  getSocioById(id: number): Observable<Socio> {
    return this.http.get<Socio>(`${this.apiUrl}/${id}`);
  }

  createSocio(socio: Socio): Observable<Socio> {
    return this.http.post<Socio>(this.apiUrl, socio);
  }

  updateSocio(id: number, socio: Socio): Observable<Socio> {
    return this.http.put<Socio>(`${this.apiUrl}/${id}`, socio);
  }

  deleteSocio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addBarcoToSocio(socioId: number, barco: Barco): Observable<Barco> {
    return this.http.post<Barco>(`${this.apiUrl}/${socioId}/barcos`, barco);
  }
}
