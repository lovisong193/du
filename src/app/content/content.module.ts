import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { StuContentComponent } from './stu-content/stu-content.component';

@NgModule({
  declarations: [MainContentComponent, StuContentComponent],
  imports: [CommonModule],
  exports: [MainContentComponent, StuContentComponent],
})
export class ContentModule {}
