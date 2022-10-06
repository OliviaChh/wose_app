import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { GlobalService } from '../service/global.service';


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
    private globalService: GlobalService  
  ) {
    this.userForm = this.formBuilder.group({
        name: [''],
        email: [''],
        username: ['']
      })
    }

  ngOnInit() {}
  
  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.globalService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}
