import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from '../models/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url='https://api.github.com/users/jorgedc87';

  constructor(public http: HttpClient) { }

  getDatos(){
    return this.http.get<Github>(this.url);
  }
}