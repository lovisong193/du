import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherLayoutComponent } from '../another-layout/another-layout.component';
import { MyShareModule } from 'src/app/my-share/my-share.module';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AnotherLayoutComponent],
  imports: [CommonModule, MyShareModule,RouterModule],
  exports: [AnotherLayoutComponent],
})
export class StuLayoutModule {}
