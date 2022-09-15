import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  arr_boolNav: boolean[] ;
  constructor(
    private gs: GlobalService,
  ) { }

  ngOnInit() {
    this.arr_boolNav = this.gs.curPage;
  }

  navClick(val: number){
    this.gs.setCurPage(val);
    console.log(`[navClick]:${this.gs.curPage}`);
  }
}
