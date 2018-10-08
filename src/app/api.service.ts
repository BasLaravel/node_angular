import { Data } from './data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { }


routeGetPost(path: string) {
  return this.http.get(`/api/${path}`);
}




}
