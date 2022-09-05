import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  arr_boolNav: boolean[] = [true, false, false, false, false, false];
  constructor() { }

  ngOnInit() {
  }

  navClick(item: number){
    for( var i = 1; i <= 5 ; i ++ ){
      if (item != i) this.arr_boolNav[i] = false;
      else this.arr_boolNav[i] = true;
    }
    
    console.log(`[navClick]: Click nav ${item}`);
  }

}
