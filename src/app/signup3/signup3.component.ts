import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.scss'],
})
export class Signup3Component implements OnInit {

  userForm3: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    public user_profileService: User_profileService  
  ) {
    this.userForm3 = this.formBuilder.group({
        goal: ['']
      })
    }

  ngOnInit() {}
  
  onSubmit() {
    console.log(`[Goal]: ${this.user_profileService.userProfile.goal}`);
    
    if (!this.user_profileService.userForm.valid) {
       return false;
    } else {
       this.user_profileService.createUser(this.user_profileService.userForm.value)
       .subscribe((response) => {
        this.zone.run(() => {
          this.user_profileService.userForm.reset();
        })
      });
    }
  }
}