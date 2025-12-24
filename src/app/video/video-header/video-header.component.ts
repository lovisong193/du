import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-header',
  templateUrl: './video-header.component.html',
  styleUrls: ['./video-header.component.scss']
})
export class VideoHeaderComponent {
 @Output() toggleSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }

  channelToggle = false;

  toggleChannel() {
    this.channelToggle = !this.channelToggle;
  }
}
