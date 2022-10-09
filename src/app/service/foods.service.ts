import { Injectable } from "@angular/core";
//backend
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';


// final export place
export class Foods {
    _id: number;
    food: string;
    calorie: number;
}

interface FoodsInterface {
    food: string,
    calorie: number
}


@Injectable({
    providedIn: 'root'
})

export class FoodsService {

    foodsForm: FormGroup;

    //(method2) temperate save user profile info
    foodsProfile: FoodsInterface = {
        food: "",
        calorie: null
    }

    //backend
    currentFood = {};
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private httpClient: HttpClient, public formBuilder: FormBuilder, public router: Router) { }

    // //sign up
    // createUser(user: User_profile): Observable<any> {
    //     console.log(`[createUser]: ${user.gender}`);
    //     return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/create-user', user, this.httpOptions)
    //         .pipe(
    //             catchError(this.handleError<User_profile>('create UserProfile failed'))
    //         );
    // }

    // //get userprofile
    // getUser(id): Observable<User_profile[]> {
    //     return this.httpClient.get<User_profile[]>('http://localhost:5000/userprofile/fetch-user/' + id)
    //         .pipe(
    //             tap(_ => console.log(`User fetched: ${id}`)),
    //             catchError(this.handleError<User_profile[]>(`Get user id=${id}`))
    //         );
    // }

    // getUsers(): Observable<User_profile[]> {
    //     return this.httpClient.get<User_profile[]>('http://localhost:5000/userprofile')
    //         .pipe(
    //             tap(users => console.log('Users retrieved!')),
    //             catchError(this.handleError<User_profile[]>('Get user', []))
    //         );
    // }

    // // Sign-in
    // signIn(user: User_profile) {
    //     return this.httpClient.post<User_profile>('http://localhost:5000/userprofile/signin', user, this.httpOptions)
    //         .subscribe((res: any) => {
    //             console.log(`[singIn]: Enter signIn ${user}`)
    //             localStorage.setItem('access_token', res.token);
    //             this.getUser(res._id).subscribe((res) => {
    //                 this.currentUser = res;
    //                 this.router.navigate(['/']);
    //             });
    //         });
    // }

    // //keep login
    // getToken() {
    //     return localStorage.getItem('access_token');
    // }
    // get isLoggedIn(): boolean {
    //     let authToken = localStorage.getItem('access_token');
    //     return authToken !== null ? true : false;
    // }

    // //logout
    // doLogout() {
    //     let removeToken = localStorage.removeItem('access_token');
    //     if (removeToken == null) {
    //         this.router.navigate(['login']);
    //     }
    // }

    // //handle error
    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.error(error);
    //         console.log(`${operation} failed: ${error.message}`);
    //         return of(result as T);
    //     };
    // }

    //  (method1) because we don't use local form so we bind to our form 
    createFoodsForm() {
        this.foodsForm = this.formBuilder.group({
            food: [''],
            calorie: ['']
        })
    }
}