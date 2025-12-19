import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifHeaderComponent } from './dif-header/dif-header.component';
import { DifSidebarComponent } from './dif-sidebar/dif-sidebar.component';

@NgModule({
  declarations: [DifHeaderComponent, DifSidebarComponent],
  imports: [CommonModule],
  exports: [DifHeaderComponent, DifSidebarComponent],
})
export class MyShareModule {}
