import {Component, OnDestroy, OnInit} from '@angular/core';
import {TutorialsService} from "../service/tutorials.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User_profileService} from "../service/user_profile.service";

@Component({
  selector: 'app-exercise-live-video',
  templateUrl: './exercise-live-video.component.html',
  styleUrls: ['./exercise-live-video.component.scss'],
})
export class ExerciseLiveVideoComponent implements OnInit {
  tutorial = {id: '', videoUrl: '', calories: '', time: ''};
  audiences = [];

  constructor(private tutorialsService: TutorialsService, public activeRoute: ActivatedRoute, private userProfileService: User_profileService) {
  }

  ionViewWillLeave() {
    this.tutorialsService.removeTutorialAudiences(localStorage.getItem('user_id'))
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.tutorial.id = params['id'];
      this.tutorial.videoUrl = params['videoUrl']
      this.tutorial.calories = params['calories']
      this.tutorial.time = params['time']
    })
    this.addAudience(this.tutorial.id, localStorage.getItem('user_id'))
    this.getAudiences(this.tutorial.id);
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
          audiences.push({
            ...data,
            calories: (audiencesTime * caloriesPerMin).toFixed(0)
          })
        })
        this.audiences = audiences;
      }
    });
  }

  public xian = 'none'
  title = 'Eleaner Pena'
  ttitle = ''
  title1 = 'Theresa Webb'

  fun() {
    this.xian = 'block'
    this.ttitle = this.title
  }

  fun1() {
    console.log(111);

    this.xian = 'none'
  }

  fun2() {
    console.log(111);
    this.ttitle = this.title1
    this.xian = 'block'
  }

  fun3() {
    // console.log(111);
    // this.ttitle = this.title1
    this.xian = 'none'
  }

}
