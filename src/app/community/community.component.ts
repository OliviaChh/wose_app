import { Component, OnInit } from '@angular/core';
import { UserFriendsService } from '../service/userFriends.service';
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  userProfile = { uname: '' }
  Friends: any = [];
  i: any;

  constructor(private userFriendsService: UserFriendsService,
    private User_profileService: User_profileService) { }


  ngOnInit() {
    console.log(`[MyPage] Init!!`);
    this.User_profileService.getUsers().subscribe((response) => {
      let users: any[];
      let email: string = localStorage.getItem('user_email');
      users = response;
      for (let i = 0; i < users.length; i++) {
        if (email == users[i].email) {
          localStorage.setItem('user_id', users[i]._id);
          console.log(users[i]._id);
        }
      }

      console.log(localStorage.getItem('user_id'));
      this.ionViewDidEnter(localStorage.getItem('user_id'));

    });
  }

  ionViewDidEnter(uid) {
    this.userFriendsService.getUserFriends(uid).subscribe((response) => {
      this.Friends = response;
    })
  }

}
