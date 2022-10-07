import {Component, OnInit} from '@angular/core';
import {User_profileService} from "../service/user_profile.service";
import {TutorialsService} from "../service/tutorials.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userProfile = {avatar: '', uname: ''}
  tutorials = []

  constructor(private User_profileService: User_profileService, private tutorialsService: TutorialsService) {
  }

  ngOnInit() {
    this.getUserProfile('test');
  }

  getUserProfile(uname) {
    this.User_profileService.getUserProfile(uname).subscribe((data) => {
      this.userProfile = data;
      this.userProfile.avatar = data.avatar !== null && data.avatar !== '' ? `data:image/jpg;base64,${data.avatar}` : '../../assets/image/dashboard/Ellipse 3.svg'
    });
  }

  searchTutorials(keywords) {
    this.tutorialsService.searchTutorials(keywords).subscribe((data) => {
      this.tutorials = data;
    })
  }
}
