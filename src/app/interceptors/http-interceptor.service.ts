import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const apiReq = req.clone({
      url: `${req.url}`,
      headers: this.retornarHeaders(req)
    })

    return next.handle(apiReq).pipe(
      catchError(error => {
        if (error.status === 400 || error.status === 404) {
          this.openSnackBar(error.error.message ? error.error.message : error.error.mensagem ? error.error.mensagem : "Ocorreu um erro.", "Fechar", 'error-snackbar');
        }
        if (error.status === 401) {
          this.openSnackBar("Sua sessão expirou.", "Fechar", 'error-snackbar');
        }
        return throwError(error);
      })
    )
  }

  openSnackBar(message: string, action: string, type: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top',// 'top' | 'bottom'
      horizontalPosition: 'right',//'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: [type],
    });
  }

  retornarHeaders(req: HttpRequest<any>): HttpHeaders {
    return req.headers.set('Accept', 'application/json')

  }
}