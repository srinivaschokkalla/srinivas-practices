import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl="http://localhost:3000/user";
  constructor(private http: HttpClient) { }

  public login(){
    return this.http.get(this.baseUrl);
  }
}
