import { Component } from '@angular/core';

@Component({
  selector: 'app-videolayout',
  templateUrl: './videolayout.component.html',
  styleUrls: ['./videolayout.component.scss']
})
export class VideolayoutComponent {
 sidebarExpandedVideo = false;

  constructor() {}


  toggleSidebarVideo() {
    this.sidebarExpandedVideo = !this.sidebarExpandedVideo;
}
 

}