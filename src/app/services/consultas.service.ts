import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService<Tipo> {

  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar,
  ) { }

  getCep(cep: string): Observable<Tipo> {
    return this._http.get<Tipo>(`https://viacep.com.br/ws/${cep}/json`)
  }

  get(local: string): Observable<Tipo[]> {
    return this._http.get<Tipo[]>(environment.urlApi + local)
  }

  getByID(local: string, id: string): Observable<Tipo> {
    return this._http.get<Tipo>(`${environment.urlApi}${local}/${id}`)
  }

  create(local: string, corpo: Tipo): Observable<Tipo> {
    return this._http.post<Tipo>(environment.urlApi + local, corpo).pipe(
      tap(() => this.doneSnackBar('Cadastro realizado.'))
    );
  }

  atualizar(local: string, id: number, corpo: Tipo): Observable<Tipo> {
    return this._http.put<Tipo>(`${environment.urlApi}${local}/${id}`, corpo).pipe(
      tap((done: any) => this.doneSnackBar(done.mensagem))
    );
  }

  deleteById(id: number, local: string): Observable<Tipo> {
    return this._http.delete<Tipo>(environment.urlApi + local + '/' + id).pipe(
      tap((done: any) => this.doneSnackBar(done.mensagem)),
    );
  }

  doneSnackBar(msg: string) {
    this.openSnackBar(msg, "Fechar", 'sucess-snackbar')
  }

  openSnackBar(message: string, action: string, type: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top',// 'top' | 'bottom'
      horizontalPosition: 'right',//'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: [type],
    });
  }
}