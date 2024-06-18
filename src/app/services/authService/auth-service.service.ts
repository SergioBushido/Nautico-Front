import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, { email, password }).pipe(
      tap((response: any) => {
        if (this.isValidJwt(response.accessToken)) {
          localStorage.setItem('accessToken', response.accessToken);
        } else {
          console.error('Invalid access token received');
        }

        if (this.isValidJwt(response.refreshToken)) {
          localStorage.setItem('refreshToken', response.refreshToken);
        } else {
          console.error('Invalid refresh token received');
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  private isValidJwt(token: string): boolean {
    const parts = token.split('.');
    return parts.length === 3;
  }
}
