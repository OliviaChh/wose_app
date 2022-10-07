import {Injectable} from "@angular/core";
//backend
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder} from "@angular/forms";

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
=======
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
>>>>>>> 191761e96686a3c794b96be04c73d8cef099bdde

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

export class User_profileService {
  
  userForm: FormGroup;

  // temperate save user profile info
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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder,) { 

=======
export class User_profileService {

  //backend
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private backendUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
>>>>>>> 191761e96686a3c794b96be04c73d8cef099bdde
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
<<<<<<< HEAD
  }  

  // final form group
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
  
=======
  }

>>>>>>> 191761e96686a3c794b96be04c73d8cef099bdde
}