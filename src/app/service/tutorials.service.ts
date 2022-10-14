import {Injectable} from "@angular/core";
//backend
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class Tutorials {
}

export class TutorialAudience {
  tid: string;
  uid: string;
  start_time: number
}

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  //backend
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private backendUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  searchTutorials(keywords?: string): Observable<Tutorials[]> {
    const url = keywords ? `${this.backendUrl}/tutorials?keywords=${keywords}` : `${this.backendUrl}/tutorials`;
    return this.httpClient.get<Tutorials[]>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Tutorials[]>('searchTutorials failed'))
      );
  }

  getTutorialInfo(id: string): Observable<Tutorials> {
    return this.httpClient.get<Tutorials>(`${this.backendUrl}/tutorials/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<Tutorials>('getTutorialInfo failed'))
      );
  }

  getTutorialAudiences(tid: string): Observable<TutorialAudience[]> {
    return this.httpClient.get<TutorialAudience[]>(`${this.backendUrl}/audiences?tid=${tid}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<TutorialAudience[]>('getTutorialAudiences failed'))
      );
  }

  addTutorialAudience(tid: string, uid: string): Observable<Tutorials> {
    const body = {
      tid,
      uid,
      start_time: Date.now()
    }
    return this.httpClient.post<Tutorials>(`${this.backendUrl}/audiences`, body, this.httpOptions)
      .pipe(
        catchError(this.handleError<Tutorials>('addTutorialAudience failed'))
      );
  }

  removeTutorialAudiences(uid: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.backendUrl}/audiences/${uid}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('removeTutorialAudiences failed'))
      );
  }

  addUserCalories(userId: string, calories: number): Observable<void> {
    return this.httpClient.post<void>(`${this.backendUrl}/tutorials/add-calories`, {userId, calories}, this.httpOptions)
      .pipe(
        catchError(this.handleError<void>('updateUserCalories failed'))
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