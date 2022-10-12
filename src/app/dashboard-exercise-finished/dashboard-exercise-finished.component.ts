import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-dashboard-exercise-finished',
  templateUrl: './dashboard-exercise-finished.component.html',
  styleUrls: ['./dashboard-exercise-finished.component.scss'],
})
export class DashboardExerciseFinishedComponent implements OnInit {
  time = 0;
  calories = 0;

  constructor(public activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.time = params['time'];
      this.calories = params['calories']
    })
  }

  ngOnInit() {
  }

}
