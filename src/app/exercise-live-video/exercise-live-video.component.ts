import {Component, OnInit} from '@angular/core';
import {TutorialsService} from "../service/tutorials.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User_profileService} from "../service/user_profile.service";
import {UserFriendsService} from "../service/userFriends.service";
import {NavController} from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-exercise-live-video',
  templateUrl: './exercise-live-video.component.html',
  styleUrls: ['./exercise-live-video.component.scss'],
})
export class ExerciseLiveVideoComponent implements OnInit {
  tutorial = {id: '', videoUrl: '', calories: '', time: ''};
  audiences = [];
  audience = {uname: '', avatar: '', _id: ''};
  friends = [];
  startTime = 0;
  safeUrl: any;
  userId = '';

  constructor(private tutorialsService: TutorialsService, public activeRoute: ActivatedRoute, private userProfileService: User_profileService, private userFriendsService: UserFriendsService, public nav: NavController, private sanitizer: DomSanitizer) {
  }

  getSafeUrl() {
    console.log('转了zzzzz', this.tutorial.videoUrl)
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.tutorial.videoUrl);
  }

  ionViewWillLeave() {
    const uid = localStorage.getItem('user_id');
    this.tutorialsService.removeTutorialAudiences(uid).subscribe(() => {
      console.log(`User ${uid} leaved`);
    })
  }

  async ngOnInit() {
    this.userId = localStorage.getItem('user_id')
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.tutorial.id = params['id'];
      this.tutorial.videoUrl = params['videoUrl'];
      this.tutorial.calories = params['calories'];
      this.tutorial.time = params['time'];
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.tutorial.videoUrl + "?autoplay=1");
    })
    console.log("Play tutorial video:", this.tutorial);
    await this.addAudience(this.tutorial.id, this.userId)
    await this.getUserFriends();
    await this.getAudiences(this.tutorial.id);
    this.startTime = Date.now();
  }

  addAudience(id, uid) {
    this.tutorialsService.addTutorialAudience(id, uid).subscribe(() => {
      console.log(`Add current user ${uid} to audiences`);
    })
  }

  getAudiences(id) {
    this.tutorialsService.getTutorialAudiences(id).subscribe((data) => {
      console.log('Audiences fetched', JSON.stringify(data));
      let audiences = []
      for (let d of data) {
        this.userProfileService.getUser(d.uid).subscribe((data) => {
          const caloriesPerMin = parseInt(this.tutorial.calories) / parseInt(this.tutorial.time)
          const audiencesTime = (Date.now() - d.start_time) / 1000 / 60;
          const user: any = data;
          audiences.push({
            ...user,
            avatar: user?.avatar !== undefined && user?.avatar !== '' ? `
      data:image / jpg;
      base64,${user.avatar}` : '../../assets/image/dashboard/Ellipse 3.svg',
            calories: (audiencesTime * caloriesPerMin).toFixed(0)
          })
        })
        this.audiences = audiences;
      }
    });
  }

  getUserFriends() {
    this.userFriendsService.getUserFriends(this.userId).subscribe((data) => {
      this.friends = data.map((d) => d.friend_id);
      console.log("User friends fetched:", data);
    })
  }

  addFriend(friendId) {
    this.userFriendsService.addUserFriend(this.userId, friendId).subscribe(() => {
      console.log("Add user friend succeed.")
      this.getUserFriends();
    })
  }

  goToExerciseFinishPage() {
    const time = (Date.now() - this.startTime) / 1000 / 60;
    const caloriesPerMin = parseInt(this.tutorial.calories) / parseInt(this.tutorial.time);
    const calories = caloriesPerMin * time;
    this.nav.navigateRoot(['dashboardexercisefinished'], {
      queryParams: {
        calories: calories.toFixed(2),
        time: time.toFixed(2),
      }
    });
  }

  public xian = 'none'

  fun(audience) {
    this.xian = 'block'
    this.audience = audience
  }

  fun1() {
    this.xian = 'none'
  }
}
