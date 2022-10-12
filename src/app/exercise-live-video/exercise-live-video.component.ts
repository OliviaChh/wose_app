import {Component, OnInit} from '@angular/core';
import {TutorialsService} from "../service/tutorials.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User_profileService} from "../service/user_profile.service";
import {UserFriendsService} from "../service/userFriends.service";
import {NavController} from '@ionic/angular';

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

  constructor(private tutorialsService: TutorialsService, public activeRoute: ActivatedRoute, private userProfileService: User_profileService, private userFriendsService: UserFriendsService, public nav: NavController) {
  }

  ionViewWillLeave() {
    const uid = localStorage.getItem('user_id');
    this.tutorialsService.removeTutorialAudiences(uid).subscribe(() => {
      console.log(`User ${uid} leaved`);
    })
  }

  async ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.tutorial.id = params['id'];
      this.tutorial.videoUrl = params['videoUrl']
      this.tutorial.calories = params['calories']
      this.tutorial.time = params['time']
    })
    await this.addAudience(this.tutorial.id, localStorage.getItem('user_id'))
    await this.getAudiences(this.tutorial.id);
    await this.getUserFriends();
    this.startTime = Date.now();
  }

  addAudience(id, uid) {
    this.tutorialsService.addTutorialAudience(id, uid).subscribe(() => {
    })
  }

  getAudiences(id) {
    this.tutorialsService.getTutorialAudiences(id).subscribe((data) => {
      console.log('audiences', JSON.stringify(data));
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
    this.userFriendsService.getUserFriends(localStorage.getItem('user_id')).subscribe((data) => {
      this.friends = data.map((d) => d.friend_id);
      console.log("User friends fetched:", data);
    })
  }

  addFriend(friendId) {
    this.userFriendsService.addUserFriend(localStorage.getItem('user_id'), friendId).subscribe(() => {
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
