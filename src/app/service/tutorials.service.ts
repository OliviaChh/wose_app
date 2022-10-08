import {Injectable} from "@angular/core";
//backend
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class Tutorials {
}

export class TutorialAudience {
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

  searchTutorials(keywords: string): Observable<Tutorials[]> {
    return this.httpClient.get<Tutorials[]>(`${this.backendUrl}/tutorials?keywords=${keywords}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<Tutorials[]>('searchTutorials failed'))
      );
  }

  getTutorialInfo(id: number): Observable<Tutorials> {
    return this.httpClient.get<Tutorials>(`${this.backendUrl}/tutorials/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<Tutorials>('getTutorialInfo failed'))
      );
  }

  getTutorialAudiences(id: number): Observable<TutorialAudience[]> {
    return this.httpClient.get<TutorialAudience[]>(`${this.backendUrl}/tutorials/${id}/audiences`, this.httpOptions)
      .pipe(
        catchError(this.handleError<TutorialAudience[]>('getTutorialAudiences failed'))
      );
  }

  addTutorialAudience(id: number, uname: string): Observable<Tutorials> {
    return this.httpClient.post<Tutorials>(`${this.backendUrl}/tutorials/${id}/audiences`, uname, this.httpOptions)
      .pipe(
        catchError(this.handleError<Tutorials>('addTutorialAudience failed'))
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