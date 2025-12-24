import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-header',
  templateUrl: './video-header.component.html',
  styleUrls: ['./video-header.component.scss']
})
export class VideoHeaderComponent {
 @Output() toggleSidebarVideo = new EventEmitter<void>();


  onSidebarToggle() {
    this.toggleSidebarVideo.emit();
  }

  channelToggle = false;

  toggleChannel() {
    this.channelToggle = !this.channelToggle;
  }

  tog() {
    console.log(alert('clicked'));
  }
}
