import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { User_profileService } from '../service/user_profile.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    public user_profileService: User_profileService  
  ){
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      uname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
     });
  }
  

  ngOnInit() {
    this.user_profileService.createUserForm();
  }
  
  onSubmit() {
    console.log(`[Email]: ${this.user_profileService.userProfile.email}`);
    console.log(`[Uname]: ${this.user_profileService.userProfile.uname}`);
    console.log(`[Passwd]: ${this.user_profileService.userProfile.password}`);
  }

}
