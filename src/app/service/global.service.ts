import { Injectable } from "@angular/core";
//backend
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

export class User {
    _id: number;
    name: string;
    email: string;
    username: string;
  }
/**PostgreSQL connection--------------------------------------------------------------*/

  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  const apiUrl = "https://git.heroku.com/makkapakka.git";
    
/**------------------------------------------------------------------------*/
@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    
    /**navbar-------------------------------------------------------------------*/
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
    /**------------------------------------------------------------------------*/
    /**PostgreSQL--------------------------------------------------------------*/
    constructor(private http: HttpClient) { }

    //handle error
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    }
    
    private extractData(res: Response) {
      let body = res;
      return body || { };
    }

    connectDB() {
      //const {Client} = require('pg');
      /*const client = new Client({
          host: "ec2-54-160-200-167.compute-1.amazonaws.com",
          user: "tmgdhnwkjscafs",
          port: 5432,
          password: "426d792d14e6ce63115b31dbe86f029371aa2961958e964b8bd0f99adda73130",
          database: "da3ve6mh7mar7o",
          ssl: {
              rejectUnauthorized: false,
          }
      })
      client.connect();*/
      
    }

    //CRUD function
    getClassroom(): Observable<any> {
      return this.http.get(apiUrl, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }
    
    getClassroomById(id: string): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.get(url, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError));
    }
    
    postClassroom(data): Observable<any> {
      const url = `${apiUrl}/add_with_students`;
      return this.http.post(url, data, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
    
    updateClassroom(id: string, data): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.put(url, data, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
    
    deleteClassroom(id: string): Observable<{}> {
      const url = `${apiUrl}/${id}`;
      return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }
    /**------------------------------------------------------------------------*/
    
  
}