import { Component } from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss'],
})
export class MainlayoutComponent {
  sidebarExpanded = false;

  constructor() {}

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}
