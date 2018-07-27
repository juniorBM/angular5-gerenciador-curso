import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RootService {
  private apiUrl: String = 'http://127.0.0.1:8030/';
  private headers;
  constructor(
    private http: HttpClient
  ) { }

  checkToken(api_token: String) {
    this.headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    console.log(api_token);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'user/checktoken', JSON.stringify({api_token: api_token}), this.headers)
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          reject(err);
        });
    });
  }
}
