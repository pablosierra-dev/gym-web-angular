import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CoachI } from 'src/app/models/coaches';

@Injectable({
  providedIn: 'root'
})
export class CoachesServices {
  api_url: string = 'http://localhost:5002';
  constructor(private http: HttpClient) { }

  allCoaches(): any{
    return this.http.get(`${this.api_url}/coachs/`)
  }

  oneCoach(id: number): any{
    return this.http.get(`${this.api_url}/coachs/${id}`)
  }

  oneCoachByName(name:string): any{
    return this.http.get(`${this.api_url}/coachs/${name}`)
  }

  newCoach(coach: CoachI): any{
    return this.http.post(`${this.api_url}/coachs/`, coach)
  }

  modifyCoach(coach: CoachI , id: number): any{
    return this.http.put(`${this.api_url}/coachs/${id}`, coach)
  }

  deleteCoach(id: number): any{
    return this.http.delete(`${this.api_url}/coachs/${id}`)
  }

  getToken(): any{
    return localStorage.getItem('token')
  }
  
  checkSession(): any{
    return this.http.get(`${this.api_url}/users/checksession`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    localStorage.removeItem('choach');
    return throwError(error.error.message)
  }
}

