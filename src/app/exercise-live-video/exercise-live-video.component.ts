import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-live-video',
  templateUrl: './exercise-live-video.component.html',
  styleUrls: ['./exercise-live-video.component.scss'],
})
export class ExerciseLiveVideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
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
