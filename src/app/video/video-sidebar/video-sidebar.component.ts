import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-video-sidebar',
  templateUrl: './video-sidebar.component.html',
  styleUrls: ['./video-sidebar.component.scss']
})
export class VideoSidebarComponent {
 @Input() expandedVideo = false;
}
