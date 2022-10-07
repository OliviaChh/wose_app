import { Injectable } from "@angular/core";
//backend
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

@Injectable({
    providedIn: 'root'
})
<<<<<<< HEAD

=======
>>>>>>> parent of 4371483b (Revert "Revert "Merge branch 'main' of https://github.com/OliviaChh/wose_app"")

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
<<<<<<< HEAD
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder) {}
=======
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient, public formBuilder: FormBuilder,) { 

  }
>>>>>>> parent of 4371483b (Revert "Revert "Merge branch 'main' of https://github.com/OliviaChh/wose_app"")

  createUser(user: User_profile): Observable<any> {
    return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/create-user', user, this.httpOptions)
      .pipe(
<<<<<<< HEAD
        catchError(this.handleError<User_profile>('create UserProfile failed'))
=======
        catchError(this.handleError<User_profile>('Error occured'))
>>>>>>> parent of 4371483b (Revert "Revert "Merge branch 'main' of https://github.com/OliviaChh/wose_app"")
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
<<<<<<< HEAD

=======
>>>>>>> parent of 4371483b (Revert "Revert "Merge branch 'main' of https://github.com/OliviaChh/wose_app"")
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
<<<<<<< HEAD
=======
  
>>>>>>> parent of 4371483b (Revert "Revert "Merge branch 'main' of https://github.com/OliviaChh/wose_app"")
}