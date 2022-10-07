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
  keywords = ''

  constructor(private User_profileService: User_profileService, private tutorialsService: TutorialsService) {
  }

  ngOnInit() {
    this.getUserProfile('test');
    this.searchTutorials();
  }

  getUserProfile(uname) {
    this.User_profileService.getUserProfile(uname).subscribe((data) => {
      this.userProfile = data;
      this.userProfile.avatar = data.avatar !== null && data.avatar !== '' ? `data:image/jpg;base64,${data.avatar}` : '../../assets/image/dashboard/Ellipse 3.svg'
    });
  }

  searchTutorials() {
    this.tutorialsService.searchTutorials(this.keywords).subscribe((data) => {
      console.log(data);
      this.tutorials = data;
    })
  }
}
