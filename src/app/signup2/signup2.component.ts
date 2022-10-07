import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { User_profileService } from '../service/user_profile.service';


@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.scss'],
})
export class Signup2Component implements OnInit {

  userForm2: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    public user_profileService: User_profileService  
  ) {
    this.userForm2 = this.formBuilder.group({
        gender: [''],
        height: [''],
        weight: ['']
      })
    }

  ngOnInit() {}
  
  onSubmit() {
    console.log(`[Gender]: ${this.user_profileService.userProfile.gender}`);
    console.log(`[Height]: ${this.user_profileService.userProfile.height}`);
    console.log(`[Weight]: ${this.user_profileService.userProfile.weight}`);
  }

  //gender button control
  genderClick(gender:number){
    if(gender==1){
      this.user_profileService.userProfile.gender="M";
    }else{
      this.user_profileService.userProfile.gender="F";
    }
  }
}
