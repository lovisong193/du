import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { StuContentComponent } from './stu-content/stu-content.component';
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
  declarations: [MainContentComponent, StuContentComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [MainContentComponent, StuContentComponent],
})
export class ContentModule {}
