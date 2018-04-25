import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from './aluno';

@Injectable()
export class AlunoService {
  private apiUrl: string = 'http://127.0.0.1:8030/';
  private _headers;

  constructor(
    private _http: HttpClient
  ) { }


  adicionarAluno(aluno: Aluno) {
    this._headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return new Promise((resolve, reject) => {
      this._http.post(this.apiUrl + 'aluno', JSON.stringify(aluno), this._headers)
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          reject(err);
        });
    });
  }
}
