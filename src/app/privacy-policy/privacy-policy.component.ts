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
      title: "1. Clause 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
    },
    {
      title: "2. Clause 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
    },
    {
      title: "3. Clause 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem."
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
