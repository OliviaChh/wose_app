import {Injectable} from "@angular/core";
//backend
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

class Friends {
  friend_id: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserFriendsService {

  //backend
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private backendUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  addUserFriend(userId: string, friendId: string): Observable<void> {
    const body = {
      user_id: userId,
      friend_id: friendId,
    }
    return this.httpClient.post<void>(`${this.backendUrl}/user-friends`, body, this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('addUserFriend failed'))
      );
  }

  getUserFriends(userId: string): Observable<Friends[]> {
    return this.httpClient.get<Friends[]>(`${this.backendUrl}/user-friends/${userId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<Friends[]>('getUserFriends failed'))
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