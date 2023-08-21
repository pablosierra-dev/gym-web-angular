import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserI } from 'src/app/models/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  db_url: string = 'http://localhost:5002';
  constructor(private http: HttpClient) { }

  register(user: UserI){
    return this.http.post(`${this.db_url}/users/register`, user)
  }

  login(user: UserI){
    return this.http.post(`${this.db_url}/users/login`, user)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    // localStorage.clear()
  }
  
  checkSession(){
    return this.http.get(`${this.db_url}/users/checksession`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    //localStorage.removeItem('token');
    //localStorage.removeItem('user');
    return throwError(error.error.message)
  }
}
