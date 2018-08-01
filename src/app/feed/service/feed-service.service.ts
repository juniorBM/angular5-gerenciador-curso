import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feed } from '../feed';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  // private apiUrl: String = 'http://127.0.0.1:8030/';
  private apiUrl: String = 'http://192.168.0.183:8030/';
  private headers;
  private user = JSON.parse(localStorage.user);

  constructor(
    private http: HttpClient,
  ) { }

  addFeed(feed: Feed) {
    this.headers = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'feeds', JSON.stringify(feed), this.headers)
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          reject(err);
        });
    });
  }

  allFeed() {
    this.headers = { headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.user.api_token) };
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + 'feeds-all', this.headers)
        .subscribe((result: any) => {
          resolve(result);
        }, (err) => {
          reject(err);
        });
    });
  }
}
