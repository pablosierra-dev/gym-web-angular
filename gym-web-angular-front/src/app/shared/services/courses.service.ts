import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CoachI } from 'src/app/models/coaches';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  api_url: string = 'http://localhost:5002';
  constructor(private http: HttpClient) { }

  getCourses(){
    return this.http.get(`${this.api_url}/class/`)
  }

  allCourses(): any{
    return this.http.get(`${this.api_url}/class/`)
  }

  oneCourse(id: number): any{
    return this.http.get(`${this.api_url}/class/${id}`)
  }

  oneCourseByName(name:string): any{
    return this.http.get(`${this.api_url}/class/${name}`)
  }

  newCourse(coach: CoachI): any{
    return this.http.post(`${this.api_url}/class/`, coach)
  }

  modifyCourse(coach: CoachI , id: number): any{
    return this.http.put(`${this.api_url}/class/${id}`, coach)
  }

  deleteCourse(id: number): any{
    return this.http.delete(`${this.api_url}/class/${id}`)
  }

  getToken(): any{
    return localStorage.getItem('token')
  }
  
  checkSession(): any{
    return this.http.get(`${this.api_url}/users/checksession`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    localStorage.removeItem('class');
    return throwError(error.error.message)
  }
}

