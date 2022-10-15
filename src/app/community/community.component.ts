import { Component, OnInit } from '@angular/core';
import { UserFriendsService } from '../service/userFriends.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {

  Friends: any = [];
  i: any;

  constructor(private userFriendsService: UserFriendsService) { }

  ngOnInit() { }

  // ionViewDidEnter() {
  //   this.userFriendsService.getUserFriends().subscribe((response) => {
  //     this.Users = response;
  //   })
  // }

}
