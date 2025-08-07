// // auth-interceptor.service.ts
// import { Injectable } from '@angular/core';
// import {
//   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { AuthService } from './auth.service.';

import {
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from './auth.service.';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('access_token');

//     let authReq = req;

//     if (token) {
//       authReq = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }

//     return next.handle(authReq).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           this.authService.logout();
//         }
//         return throwError(() => error);
//       })
//     );
//   }
// }

// auth.interceptor.ts
// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
// import { Observable, catchError, throwError } from 'rxjs';
// import { AuthService } from './auth.service.';

// export const authInterceptor: HttpInterceptorFn = (
//   req: HttpRequest<unknown>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<unknown>> => {
//   const authService = inject(AuthService);
//   const token = localStorage.getItem('access_token');

//   const clonedReq = token
//     ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
//     : req;

//   return next(clonedReq).pipe(
//     catchError((error: HttpErrorResponse) => {
//       if (error.status === 401) {
//         console.warn('401 detected in interceptor');
//         authService.logout(); // викликаєш logout тут
//       }
//       return throwError(() => error);
//     })
//   );
// };

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);

  console.log('=== INTERCEPTOR CALLED ===');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);

  const token = localStorage.getItem('token');
  console.log('Token exists:', !!token);

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Request with auth header');
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.warn('401 detected in interceptor');
          authService.logout();
        }
        return throwError(() => error);
      })
    );
  }

  console.log('Request without auth header');
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('401 detected in interceptor');
        authService.logout();
      }
      return throwError(() => error);
    })
  );
}
