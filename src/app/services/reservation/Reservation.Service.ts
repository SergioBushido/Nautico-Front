import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8081/api/reservations';

  constructor(private http: HttpClient) {}

  getAvailableTimeSlots(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/timeslots/${date}`);
  }

  createReservation(timeSlotId: number, reservation: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${timeSlotId}`, reservation);
  }
}
