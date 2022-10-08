import { Injectable } from "@angular/core";
//backend
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder} from "@angular/forms";

// final export place
export class User_profile {
    _id: number;
    email: string;
    uname: string;
    password: string;
    gender: string;
    height: number;
    weight: number;
    goal: number;
  }

  interface UserProfile{
    email: string,
    uname: string,
    passwd: string,
    gender: string,
    height: number,
    weight: number,
    goal: number
  }

@Injectable({
    providedIn: 'root'
})

export class User_profileService {
  
  userForm: FormGroup;

  //(method2) temperate save user profile info
  userProfile: UserProfile = {
    email: "",
    uname: "",
    passwd: "",
    gender: "",
    height: null,
    weight: null,
    goal: null
  }

  //backend
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder) {}

  createUser(user: User_profile): Observable<any> {
    console.log(`[createUser]: ${user.gender}`);
    return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/create-user', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User_profile>('create UserProfile failed'))
      );
  }

  getUser(id): Observable<User_profile[]> {
    return this.httpClient.get<User_profile[]>('http://localhost:5000/userprofile/fetch-user/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<User_profile[]>(`Get user id=${id}`))
      );
  }

  getUsers(): Observable<User_profile[]> {
    return this.httpClient.get<User_profile[]>('http://localhost:5000/userprofile')
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<User_profile[]>('Get user', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

  //  (method1) because we don't use local form so we bind to our form 
  createUserForm(){
    this.userForm = this.formBuilder.group({
      email: [''],
      uname: [''],
      passwd: [''],
      gender: [''],
      height: [''],
      weight: [''],
      goal: ['']
    })
  }
}