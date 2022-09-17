import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  getContent() {
    return document.querySelector('ion-content');
  }

  scrollToBottom() {
    this.getContent().scrollToBottom(500);
    console.log(`[scrollToBottom]:down`);
  }

   scrollToTop() {
    this.getContent().scrollToTop(500);
    console.log(`[scrollToTop]:top`);
  }

}
