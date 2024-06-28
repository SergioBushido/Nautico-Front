import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8081/api/reservations';

  constructor(private http: HttpClient) { }

  getAvailableTimeSlots(date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/timeslots/${date}`);
  }

  createReservation(reservation: any): Observable<any> {
    return this.http.post(this.apiUrl, reservation);
  }
}
