import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CursoService {
  private curso: Curso;
  private apiUrl: string = 'http://127.0.0.1:8030/';
  private _headers;
  constructor(
    private http: HttpClient
  ) { }


  adicionarCurso(curso: Curso) {
    this._headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'curso', JSON.stringify(curso), this._headers)
        .subscribe((result: any) => {
          console.log(result);
          resolve(result);
        }, (err) => {
          console.log(err.error);
          reject(err.error);
        });
    })
  }

  listarCurso() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'cursos')
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          console.log(err.error);
          reject(err.error);
        });
    });
  }

  editarCurso(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'editar-curso/' + id)
        .subscribe((result: any) => {
          resolve(result)
        }, (err => {
          console.log(err.error);
          
        }));
    });
  }

  salvarCurso(curso: Curso, id: number) {
    this._headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + 'curso/' + id, JSON.stringify(curso), this._headers)
        .subscribe((result: any) => {
          console.log(result);
        }, (err => {
          console.log(err.error);
          
         }));
    });
  }


  deletarCurso(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl + 'curso/' + id)
        .subscribe((result: any) => {
          resolve(result);
        })
    });
  }
}
