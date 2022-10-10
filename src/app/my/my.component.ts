import { Component, OnInit } from '@angular/core';
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit {

  constructor(
    private us: User_profileService
  ) { }

  ngOnInit() {}

  logOut(){
    this.us.doLogout();
  }
}
