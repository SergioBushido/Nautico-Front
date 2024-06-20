import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './services/authService/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    if (token && this.isValidJwt(token)) {
      request = this.addTokenHeader(request, token);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403 && !this.isRefreshing) {
          this.isRefreshing = true;
          return this.authService.refreshToken().pipe(
            switchMap((response: any) => {
              this.isRefreshing = false;
              localStorage.setItem('access_token', response.accessToken);
              return next.handle(this.addTokenHeader(request, response.accessToken));
            }),
            catchError((refreshError) => {
              this.isRefreshing = false;
              this.authService.logout();
              return throwError(refreshError);
            })
          );
        }

        return throwError(error);
      })
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private isValidJwt(token: string): boolean {
    const parts = token.split('.');
    return parts.length === 3;
  }
}
