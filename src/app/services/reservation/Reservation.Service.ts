import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8081/api/reservations';

  constructor(private http: HttpClient) {}

  getAvailableNatacion(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/natacion/${date}`);
  }

  createReservation(timeSlotId: number, reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/natacion/${timeSlotId}`, reservation);
  }

  getAvailableGimnasio(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gimnasio/${date}`);
  }

  createReservationGym(timeSlotId: number, reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/gimnasio/${timeSlotId}`, reservation);
  }
}

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8081/api/reservations';

  constructor(private http: HttpClient) {}

  getAvailableNatacion(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/natacion/${date}`);
  }

  createReservation(timeSlotId: number, userId: number, reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/natacion/${timeSlotId}/user/${userId}`, reservation);
  }

  getAvailableGimnasio(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/gimnasio/${date}`);
  }

  createReservationGym(timeSlotId: number, userId: number, reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/gimnasio/${timeSlotId}/user/${userId}`, reservation);
  }
}*/
