import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard-live-workout',
  templateUrl: './dashboard-live-workout.component.html',
  styleUrls: ['./dashboard-live-workout.component.scss'],
})
export class DashboardLiveWorkoutComponent implements OnInit {
  tutorial = {id: '', videoUrl: '', coach: '', time: '', calories: '', bigImageUrl: ''};

  constructor(public nav: NavController, public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.tutorial.id = params['id'];
      this.tutorial.coach = params['coach'];
      this.tutorial.time = params['time'];
      this.tutorial.calories = params['calories'];
      this.tutorial.videoUrl = params['videoUrl'];
      this.tutorial.bigImageUrl = params['bigImageUrl'];
    });
  }

  goToExerciseLivePage() {
    this.nav.navigateRoot(['exerciselivevideo'], {
      queryParams: {
        id: this.tutorial.id,
        videoUrl: this.tutorial.videoUrl,
        bigImageUrl: this.tutorial.bigImageUrl,
        calories: this.tutorial.calories,
        time: this.tutorial.time,
      }
    });
  }
}
