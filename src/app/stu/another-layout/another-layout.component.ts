import { Component } from '@angular/core';

@Component({
  selector: 'app-another-layout',
  templateUrl: './another-layout.component.html',
  styleUrls: ['./another-layout.component.scss']
})
export class AnotherLayoutComponent {
  sidebarStuExpanded = false;

  constructor() {}

  toggleStuSidebar() {
    this.sidebarStuExpanded = !this.sidebarStuExpanded;
  }

}
