import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHeaderComponent } from '../video-header/video-header.component';
import { VideoSidebarComponent } from '../video-sidebar/video-sidebar.component';
import { VideoButtonComponent } from '../video-button/video-button.component';
import { ChannelComponent } from '../channel/channel.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [VideoHeaderComponent, VideoSidebarComponent, VideoButtonComponent,ChannelComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    VideoHeaderComponent,
    VideoSidebarComponent,
    VideoButtonComponent,
    ChannelComponent
  ]
})
export class VideoModule { }
