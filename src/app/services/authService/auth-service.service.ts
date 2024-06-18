import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/v1/auth'; // URL de tu backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, { email, password }).pipe(
      tap((response: any) => {
        console.log('Login response:', response); // Log de la respuesta completa
        const accessToken = response.access_token;
        const refreshToken = response.refresh_token;

        console.log('Access Token:', accessToken); // Log del token de acceso
        console.log('Refresh Token:', refreshToken); // Log del token de refresco

        if (this.isValidJwt(accessToken)) {
          localStorage.setItem('accessToken', accessToken);
        } else {
          throw new Error('Invalid access token received');
        }

        if (this.isValidJwt(refreshToken)) {
          localStorage.setItem('refreshToken', refreshToken);
        } else {
          throw new Error('Invalid refresh token received');
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
    if (!token) {
      return false;
    }
    const parts = token.split('.');
    return parts.length === 3;
  }
}
