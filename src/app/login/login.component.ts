import { Component, OnInit } from '@angular/core';
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  Users: any = [];
  
  constructor( private user_profileService: User_profileService) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.user_profileService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

}
