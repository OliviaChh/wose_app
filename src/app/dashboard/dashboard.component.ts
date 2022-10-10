import {Component, OnInit} from '@angular/core';
import {User_profileService} from "../service/user_profile.service";
import {TutorialsService} from "../service/tutorials.service";
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userProfile = {uname: '', avatar: ''}
  tutorials = []
  keywords = ''

  constructor(public nav: NavController, private User_profileService: User_profileService, private tutorialsService: TutorialsService) {
  }

  ngOnInit() {
    this.getUserProfile(localStorage.getItem('user_id'));
    this.searchTutorials();
  }

  getUserProfile(uid) {
    this.User_profileService.getUser(uid).subscribe((data) => {
      console.log("response: " + JSON.stringify(data));
      const response: any = data;
      this.userProfile = response;
      this.userProfile.avatar = this.userProfile?.avatar !== undefined && this.userProfile?.avatar !== '' ? `data:image/jpg;base64,${this.userProfile.avatar}` : '../../assets/image/dashboard/Ellipse 3.svg'
    });
  }

  searchTutorials() {
    this.tutorialsService.searchTutorials(this.keywords).subscribe((data) => {
      console.log(data);
      this.tutorials = data;
    })
  }

  goToTutorialDetails(tutorial) {
    this.nav.navigateRoot(['dashboardliveworkout'], {
      queryParams: {
        id: tutorial._id,
        name: tutorial.name,
        coach: tutorial.coach,
        time: tutorial.time,
        calories: tutorial.calories,
        videoUrl: tutorial.videoUrl,
        bigImageUrl: tutorial.bigImageUrl,
      }
    });
  }
}
