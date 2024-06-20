import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8081/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/authenticate`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
      })
    );
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/refresh-token`, {});
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 403) {
      alert('Token expirado. Por favor, inicia sesión de nuevo.');
    } else {
      alert('Error de autenticación: ' + error.message);
    }
    return throwError(error);
  }
}
