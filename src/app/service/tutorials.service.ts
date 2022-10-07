import {Injectable} from "@angular/core";
//backend
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class Tutorials {
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}