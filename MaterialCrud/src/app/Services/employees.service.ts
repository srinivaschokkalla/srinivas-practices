import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from '../Models/Employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
   baseUrl='http://localhost:3000/Employee';
  constructor(private http:HttpClient) { }
  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }
    else
    {
      console.log('Server Side error',errorResponse.error);
    }
 
    return throwError('their is error in code');
  }

  public getEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));
  }
    

  public getEmployeeById(id:number):Observable<Employee>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(catchError(this.handleError));
  }

  public addEmployee(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,emp);
  }

  public deleteEmployee(id:number):Observable<Employee>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Employee>(url).pipe(catchError(this.handleError));
  }
  }

  

