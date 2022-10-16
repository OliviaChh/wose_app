import { Component, OnInit } from '@angular/core';
import { UserFriendsService } from '../service/userFriends.service';
import { User_profileService } from '../service/user_profile.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})

export class CommunityComponent implements OnInit {
  Friends: any = [];
  fr = [{avatar: '', uname: ''}];
  userId = '';

  constructor(private userFriendsService: UserFriendsService,
    private User_profileService: User_profileService) {}
  
  ngOnDestroy(): void {
    //console.log(`[Dashboard] Destroy!!`);
  }

  async ngOnInit() {
    const uid = localStorage.getItem('user_id');
    //this.getFriendList(uid);
    this.getFriend(uid);
  }

  getFriendList(uid) {
    this.userFriendsService.getUserFriends(uid).subscribe((response) => {
      this.Friends = response;
    })
  }

  getFriend(id) {
    return this.userFriendsService.getUserFriends(id).subscribe((data) => {
      let fr = [];
      this.User_profileService.getUsers().subscribe((res) => {
        console.log(`[getFriend]: ${res}`);
        for (let j = 0; j < data.length; j ++){
          for (let i = 0; i < res.length; i ++){
            if (res[i]['_id'] == data[j]['friend_id']){
              fr.push({
                uname: res[i]['uname'],
                avatar: res[i]['avatar'] !== undefined && res[i]['avatar'] !== '' ? `
      data:image / jpg;
      base64,${res[i]['avatar']}` : '../../assets/image/dashboard/Ellipse 3.svg',
              });
              break;
            }
          }
        }
      });
      this.fr = fr;
    });

  }
}
