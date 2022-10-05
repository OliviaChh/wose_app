import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent implements OnInit {

  Users: any = [];
  i: any;

  constructor(
    public api: GlobalService, 
    public loadingController: LoadingController) { }

  classrooms: any;
  
  async getClassrooms() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getClassroom()
      .subscribe(res => {
        console.log(res);
        this.classrooms = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getClassrooms();
  }

  

}