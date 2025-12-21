import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifHeaderComponent } from './dif-header/dif-header.component';
import { DifSidebarComponent } from './dif-sidebar/dif-sidebar.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  declarations: [DifHeaderComponent, DifSidebarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [DifHeaderComponent, DifSidebarComponent],
})
export class MyShareModule {}
