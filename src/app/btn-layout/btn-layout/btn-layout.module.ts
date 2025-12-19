import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BtnLayoutComponent } from '../btn-layout.component';
import { SubComponent } from '../sub/sub.component';
import { YouLayoutComponent } from '../you-layout/you-layout.component';

@NgModule({
  declarations: [BtnLayoutComponent, SubComponent, YouLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [BtnLayoutComponent, SubComponent, YouLayoutComponent],
})
export class BtnLayoutModule {}
