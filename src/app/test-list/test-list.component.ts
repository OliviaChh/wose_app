import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss'],
})
export class TestListComponent implements OnInit {

  Users: any = [];
  i: any;

  constructor( private globalService: GlobalService ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.globalService.getUsers().subscribe((response) => {
      this.Users = response;
    })
  }

  removeUser(user, i) {
    if (window.confirm('Are you sure')) {
      this.globalService.deleteUser(user._id)
      .subscribe(() => {
          this.Users.splice(i, 1);
          console.log('User deleted!')
        }
      )
    }
  }

}