import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patron } from '../../models/patron/patron.model';

@Injectable({
  providedIn: 'root'
})
export class PatronService {
  private apiUrl = 'http://localhost:8081/patrones';

  constructor(private http: HttpClient) { }


  getPatrones(): Observable<Patron[]> {
    return this.http.get<Patron[]>(`${this.apiUrl}`);
  }

  getPatronById(id: number): Observable<Patron> {
    return this.http.get<Patron>(`${this.apiUrl}/${id}`);
  }

  createPatron(patron: Patron): Observable<Patron> {
    return this.http.post<Patron>(this.apiUrl, patron);
  }

  updatePatron(id: number, patron: Patron): Observable<Patron> {
    return this.http.put<Patron>(`${this.apiUrl}/${id}`, patron);
  }

  deletePatron(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

 
}
