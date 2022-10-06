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
    private user_profileService: User_profileService  
  ) {
    this.userForm = this.formBuilder.group({
        email: [''],
        uname: [''],
        password: ['']
      })
    }

  ngOnInit() {}
  
  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.user_profileService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
          })
        });
    }
  }

}
