import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-dashboard-live-workout',
  templateUrl: './dashboard-live-workout.component.html',
  styleUrls: ['./dashboard-live-workout.component.scss'],
})
export class DashboardLiveWorkoutComponent implements OnInit {
  tutorial = {_id: '', videoUrl: '', coach: '', time: '', calories: ''};

  constructor(public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.tutorial._id = params['id'];
      this.tutorial.coach = params['coach'];
      this.tutorial.time = params['time'];
      this.tutorial.calories = params['calories'];
      this.tutorial.videoUrl = params['videoUrl'];
    });
  }

}
