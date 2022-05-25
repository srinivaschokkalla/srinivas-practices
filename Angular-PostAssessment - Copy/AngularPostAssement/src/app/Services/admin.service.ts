import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { books } from '../Model/admin.model';
import { requestbooks } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accect','accept/json');
 httpOption = {
   headers: this.headers
 }
  
  delete(Id: any) {
    throw new Error('Method not implemented.');
  }

  baseUrl='http://localhost:3000/books';
  requestsUrl="http://localhost:3000/requestbooks"
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
  public getbookss():Observable<books[]>{
    debugger;
    return this.http.get<books[]>(this.baseUrl).pipe(catchError(this.handleError));
    }
    
    public getbooksById(id:number):Observable<books>{
      const url=`${this.baseUrl}/${id}`;
      return this.http.get<books>(url);
    }
  
    public addbooks(emp:any):Observable<books>{
      return this.http.post<books>(this.baseUrl,emp);
    }
  
     public editbooks(user: any):Observable<books>{
      const url=`${this.baseUrl}/${user.id}`;

       return this.http.put<books>(url,user).pipe(catchError(this.handleError));;
     }
    //  public getUpdateUser(id: number): Observable<books> {
    //   const url = `${this.baseUrl}/${id}`;
    //   debugger
    //   return this.http.get<books>(url,this.httpOption)
    // }
    public deletebooks(id:any):Observable<books>{
      debugger;
      const url=`${this.baseUrl}/${id}`;
      return this.http.delete<books>(url).pipe(catchError(this.handleError));
    }
    public addrequestbook(data:any):Observable<requestbooks>{
      debugger;
    return this.http.post<requestbooks>(this.requestsUrl,data).pipe(catchError(this.handleError));
    }
    public getUserRequestedbooks():Observable<requestbooks[]>{
      return this.http.get<requestbooks[]>(this.requestsUrl).pipe(catchError(this.handleError));
    }
}
