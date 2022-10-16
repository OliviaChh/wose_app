import { Component, OnInit } from '@angular/core';
import { User_profileService } from '../service/user_profile.service';


@Component({
  selector: 'app-achievement-page',
  templateUrl: './achievement-page.component.html',
  styleUrls: ['./achievement-page.component.scss'],
})
export class AchievementPageComponent implements OnInit {
  userProfile = {uname: '', avatar:'', calories:'', goal:'', weight:''}

  bool_100: boolean;
  bool_200: boolean;
  bool_500: boolean;
  bool_1000: boolean;
  bool_2000: boolean;
  bool_5000: boolean;
  bool_10000: boolean;
  bool_20000: boolean;

  constructor(
    private User_profileService: User_profileService
  ) { }

  ngOnInit() {
    console.log(`[MyPage] Init!!`);
    this.User_profileService.getUsers().subscribe((response) => {
      let users: any[];
      let email: string = localStorage.getItem('user_email');
      // let calories: string = localStorage.getItem('calories');


      if (Number(this.userProfile.calories)  > 100) {
        this.bool_100 = true;
      } else {this.bool_100 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("200", 10)) {
        this.bool_200 = true;
      } else {this.bool_200 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("500", 10)) {
        this.bool_500 = true;
      } else {this.bool_500 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("1000", 10)) {
        this.bool_1000 = true;
      } else {this.bool_1000 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("2000", 10)) {
        this.bool_2000 = true;
      } else {this.bool_2000 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("5000", 10)) {
        this.bool_5000 = true;
      } else {this.bool_5000 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("10000", 10)) {
        this.bool_10000 = true;
      } else {this.bool_10000 = false;}

      if (parseInt(this.userProfile.calories, 10) > parseInt("20000", 10)) {
        this.bool_20000 = true;
      } else {this.bool_20000 = false;}

      users = response;
      for (let i = 0; i < users.length; i++) {
        if (email == users[i].email) {
          localStorage.setItem('user_id', users[i]._id);
          console.log(`GetUser: ${users[i]._id}`)

          
        }
      }

      console.log(`[MyPage]: user_id ${localStorage.getItem('user_id')}`);
      this.getUserProfile(localStorage.getItem('user_id'));
    });

    
    
  }

  getUserProfile(uid) {
    this.User_profileService.getUser(uid).subscribe((data) => {
      console.log("response: " + JSON.stringify(data));
      const response: any = data;
      this.userProfile = response;
      console.log(`[MyPage] getUserProfile: ${this.userProfile.uname}`)
      this.userProfile.avatar = this.userProfile?.avatar !== undefined && this.userProfile?.avatar !== '' ? `data:image/jpg;base64,${this.userProfile.avatar}` : '../../assets/image/dashboard/Ellipse 3.svg'
    });
  }

  

}
