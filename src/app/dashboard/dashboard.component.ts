import {Component, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {User_profileService} from "../service/user_profile.service";
import {TutorialsService} from "../service/tutorials.service";
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  userProfile = {uname: '', avatar: ''}
  tutorials = []
  keywords = ''
  tutorialsByKeyword = []

  constructor(public nav: NavController, private User_profileService: User_profileService, private tutorialsService: TutorialsService) {
  }

  ngOnDestroy(): void {
    console.log(`[Dashboard] Destroy!!`);
  }

  async ngOnInit() {
    console.log(`[Dashboard] Init!!`);
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

    this.searchTutorials();
    this.searchTutorials({code: 'Enter'});
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

  searchTutorials(event?) {
    const showTutorialsCount = 3;
    if (!event) {
      this.tutorialsService.searchTutorials().subscribe((data) => {
        console.log(data);
        this.tutorials = data.slice(0, showTutorialsCount);
      })
    } else if (event && event.code === 'Enter') {
      console.log("keywords", this.keywords);
      this.tutorialsService.searchTutorials(this.keywords).subscribe((data) => {
        console.log(data);
        this.tutorialsByKeyword = data.slice(0, showTutorialsCount);
      })
    }
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
