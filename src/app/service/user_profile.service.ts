import { Injectable } from "@angular/core";
//backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User_profile {
    _id: number;
    email: string;
    uname: string;
    password: string;
  }

@Injectable({
    providedIn: 'root'
})
export class User_profileService {
    
    //backend
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

  constructor(private httpClient: HttpClient) { }

  createUser(user: User_profile): Observable<any> {
    return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/create-user', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User_profile>('Error occured'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}