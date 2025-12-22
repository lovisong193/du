import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, DropMenuComponent, ButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, DropMenuComponent, ButtonComponent],
})
export class ShareModule {}
