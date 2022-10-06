import { Injectable } from "@angular/core";

//backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
    _id: number;
    name: string;
    email: string;
    username: string;
  }

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    
    //navbar
    private arr_boolNav: boolean[] = [true, false, false, false, false, false];
    
    setCurPage(val: number) {
        for (var i = 1; i <= 5; i++) {
            if (val != i) this.arr_boolNav[i] = false;
            else this.arr_boolNav[i] = true;
        }
    }

    get curPage() {
        return this.arr_boolNav;
    }

    //backend
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.httpClient.post<User>('http://localhost:5000/api/create-user', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Error occured'))
      );
  }

  getUser(id): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:5000/api/fetch-user/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<User[]>(`Get user id=${id}`))
      );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:5000/api')
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<User[]>('Get user', []))
      );
  }

  updateUser(id, user: User): Observable<any> {
    return this.httpClient.put('http://localhost:5000/api/update-user/' + id, user, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<User[]>('Update user'))
      );
  }

  deleteUser(id): Observable<User[]> {
    return this.httpClient.delete<User[]>('http://localhost:5000/api/delete-user/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<User[]>('Delete user'))
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