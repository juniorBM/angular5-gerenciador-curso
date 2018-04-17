import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GlobalService {

  private apiUrl: string = 'http://127.0.0.1:8030/';

  constructor(
    private http: HttpClient
  ) { }

}
