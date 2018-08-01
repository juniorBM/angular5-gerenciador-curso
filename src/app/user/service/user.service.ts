import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private apiUrl: String = 'http://127.0.0.1:8030/';
  private apiUrl: String = 'http://192.168.0.183:8030/';
  private headers;

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) {
    this.headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'user', JSON.stringify(user), this.headers)
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          reject(err);
        });
    });
  }
}
