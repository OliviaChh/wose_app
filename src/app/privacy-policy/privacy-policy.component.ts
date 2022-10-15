import { Component, OnInit } from '@angular/core';


interface PrivacyContent{
  title: string,
  content: string
}

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})


export class PrivacyPolicyComponent implements OnInit {

  privacyContent: PrivacyContent[] = [
    {
      title: "1. Privacy Policy",
      content: "Wose App is designed to protect your information. When you download the Wose, we collect information about your browsing activity, including the workout previews you watch, and about any marketing campaign that led you to the app. This information is associated with your User ID and is used to improve the service."
    },
    {
      title: "2. Sharing Policy",
      content: ""
    },
    {
      title: "3. Clause 3",
      content: ""
    },
    {
      title: "4. Clause 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
    },
    {
      title: "5. Clause 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
    }
  ];
  
  constructor() { }

  ngOnInit() {
    
  }

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
