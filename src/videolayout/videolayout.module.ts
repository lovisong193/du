import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideolayoutComponent } from './videolayout/videolayout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VideoModule } from 'src/app/video/video/video.module';



@NgModule({
  declarations: [
    VideolayoutComponent
  ],
  imports: [
    CommonModule, RouterModule,VideoModule, RouterOutlet
  ],
})
export class VideolayoutModule { }
