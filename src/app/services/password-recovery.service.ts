import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  private apiUrl = 'http://localhost:8081/api/password-recovery';

  constructor(private http: HttpClient) { }

  sendRecoveryEmail(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email });
  }
}
