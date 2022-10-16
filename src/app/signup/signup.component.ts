import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { User_profileService } from '../service/user_profile.service';


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
  ) {}

  ngOnInit() {
    this.user_profileService.createUserForm();
  }
  
  onSubmit() {
    console.log(`[Email]: ${this.user_profileService.userProfile.email}`);
    console.log(`[Uname]: ${this.user_profileService.userProfile.uname}`);
    console.log(`[Passwd]: ${this.user_profileService.userProfile.password}`);
  }

}
