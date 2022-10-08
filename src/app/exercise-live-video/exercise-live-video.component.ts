import {Component, OnInit} from '@angular/core';
import {TutorialsService} from "../service/tutorials.service";

@Component({
  selector: 'app-exercise-live-video',
  templateUrl: './exercise-live-video.component.html',
  styleUrls: ['./exercise-live-video.component.scss'],
})
export class ExerciseLiveVideoComponent implements OnInit {
  videoUrl = '';
  audiences = [];

  constructor(private tutorialsService: TutorialsService) {
  }

  ngOnDestroy() {
  console.log('byebye');
  }

  ngOnInit() {
    this.videoUrl = 'video/video1.mp4';
    this.addAudience('6341735692b45a78c8349335','2')
    this.getAudiences(1);
  }

  loadVideo(tutorial) {
    this.videoUrl = tutorial.videoUrl;
  }

  addAudience(id, uname) {
    this.tutorialsService.addTutorialAudience(id, uname).subscribe((data) => {
      console.log("Add audience succeed");
    })
  }

  getAudiences(id) {
    this.tutorialsService.getTutorialAudiences(id).subscribe((data) => {
      console.log('audiences', JSON.stringify(data));
      this.audiences = data;
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
