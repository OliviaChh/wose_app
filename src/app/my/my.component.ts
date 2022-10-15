import { Component, OnInit } from '@angular/core';
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit {
  userProfile = {uname: '', avatar:'', calories:'', goal:'', weight:''}

  constructor(
    private User_profileService: User_profileService
  ) { }

  ngOnInit() {

    console.log(`[MyPage] Init!!`);
    this.User_profileService.getUsers().subscribe((response) => {
      let users: any[];
      let email: string = localStorage.getItem('user_email');
      users = response;
      for (let i = 0; i < users.length; i++) {
        if (email == users[i].email) {
          localStorage.setItem('user_id', users[i]._id);
          console.log(`GetUser: ${users[i]._id}`)
        }
      }

      console.log(`[Dashboard]: user_id ${localStorage.getItem('user_id')}`);
      this.getUserProfile(localStorage.getItem('user_id'));
    });
  }

  getUserProfile(uid) {
    this.User_profileService.getUser(uid).subscribe((data) => {
      console.log("response: " + JSON.stringify(data));
      const response: any = data;
      this.userProfile = response;
      console.log(`[Dashboard] getUserProfile: ${this.userProfile.uname}`)
      this.userProfile.avatar = this.userProfile?.avatar !== undefined && this.userProfile?.avatar !== '' ? `data:image/jpg;base64,${this.userProfile.avatar}` : '../../assets/image/dashboard/Ellipse 3.svg'
    });
  }

  logOut(){
    this.User_profileService.doLogout();
  }
}
