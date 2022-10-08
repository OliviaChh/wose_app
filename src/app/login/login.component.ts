import { Component, OnInit } from '@angular/core';
import { User_profileService } from '../service/user_profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  Users: any = [];
  signinForm: FormGroup;

  constructor( public fb: FormBuilder, public user_profileService: User_profileService, public router: Router) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.user_profileService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

  loginUser() {
    this.user_profileService.signIn(this.signinForm.value);
  }

}
