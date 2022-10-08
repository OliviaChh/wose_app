import { Injectable } from "@angular/core";
//backend
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';


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
  currentUser = {};
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder, public router: Router) {}

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
    return this.httpClient.get<User_profile[]>('http://localhost:5000/userprofile/fetch-user/' + id )
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
    return this.httpClient.post<any>('http://localhost:5000/userprofile/signin', user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.getUser(res._id).subscribe((res) => {
          this.currentUser = res;
          //this.router.navigate(['user-profile/']);
        });
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
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