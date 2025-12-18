import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { ShareModule } from '../share/share.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [MainlayoutComponent],
  imports: [CommonModule, ShareModule, RouterOutlet, RouterModule],
})
export class LayoutModule {}
