import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideolayoutComponent } from './videolayout/videolayout.component';
import { RouterModule } from '@angular/router';
import { VideoModule } from 'src/app/video/video/video.module';
import { VideoContentComponent } from 'src/app/content/video-content/video-content.component';



@NgModule({
  declarations: [
    VideolayoutComponent,
    VideoContentComponent
  ],
  imports: [
    CommonModule, RouterModule,VideoModule
  ],
})
export class VideolayoutModule { }
