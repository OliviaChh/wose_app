import { Injectable } from "@angular/core";
//backend
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';


// final export place
export class User_profile {
  _id: string;
  email: string;
  uname: string;
  password: string;
  gender: string;
  height: number;
  weight: number;
  goal: number;
  avatar: string;
  calories: number;
  intake: number;
}

interface UserProfile {
  email: string,
  uname: string,
  password: string,
  gender: string,
  height: number,
  weight: number,
  goal: number,
  avatar: string,
  calories: number,
  intake: number
}

@Injectable({
  providedIn: 'root'
})

export class User_profileService {

  private backendUrl = 'http://localhost:5000';
  userForm: FormGroup;

  //(method2) temperate save user profile info
  userProfile: UserProfile = {
    email: "",
    uname: "",
    password: "",
    gender: "",
    height: null,
    weight: null,
    goal: null,
    avatar: "",
    calories: null,
    intake: null
  }

  //backend
  currentUser = {};
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder, public router: Router) { }

  //sign up
  createUser(user: User_profile): Observable<any> {
    console.log(`[createUser]: ${user.gender}`);
    return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/create-user', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User_profile>('create UserProfile failed'))
      );
  }

  //get userprofile
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

  // Sign-in
  signIn(user: User_profile) {
    return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/signin', user, this.httpOptions)
      .subscribe((res: any) => {
        // save user information to local storage after success with token we don't use this now
        //console.log(`[singIn]: Enter signIn ${user}`)
        localStorage.setItem('access_token', res.token);
        // console.log(`[signIn] Token: ${localStorage.getItem('access_token')}`);

        // save user information to local storage after success
        localStorage.setItem('user_email', user.email);
        console.log(`[signIn] User_id: ${localStorage.getItem('user_email')}`);

        this.getUser(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/dashboard']);
        });
      });
  }

  //keep login
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  //logout
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    // remove the user info from localStorage
    let removeUserInfo = localStorage.removeItem('user_email');
    console.log(`[LogOut] Token: ${localStorage.getItem('access_token')}`);
    console.log(`[LogOut] Token: ${localStorage.getItem('user_email')}`);
    if (removeToken == null && removeUserInfo == null) {
      this.router.navigate(['login']);
    }

  }

  //handle error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // getUserProfile(uname: string): Observable<User_profile> {
  //   return this.httpClient.get<User_profile>(`${this.backendUrl}/userprofile/${uname}`, this.httpOptions)
  //     .pipe(
  //       catchError(this.handleError<User_profile>('getUserProfile failed'))
  //     );
  // }

  //  (method1) because we don't use local form so we bind to our form 
  createUserForm() {
    this.userForm = this.formBuilder.group({
      email: [''],
      uname: [''],
      password: [''],
      gender: [''],
      height: [''],
      weight: [''],
      goal: [''],
      avatar: [''],
      calories: [''],
      intake: ['']
    })
  }
}