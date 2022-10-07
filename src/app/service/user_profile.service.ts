import {Injectable} from "@angular/core";
//backend
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class User_profile {
  _id: number;
  email: string;
  uname: string;
  password: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class User_profileService {

  //backend
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private backendUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  createUser(user: User_profile): Observable<any> {
    return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/create-user', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User_profile>('create UserProfile failed'))
      );
  }

  getUserProfile(uname: string): Observable<User_profile> {
    return this.httpClient.get<User_profile>(`${this.backendUrl}/userprofile/${uname}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<User_profile>('getUserProfile failed'))
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