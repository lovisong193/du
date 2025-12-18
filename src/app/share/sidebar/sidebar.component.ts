import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() expanded = false;

  channel = [
    {
      name: 'LolElekktro',
    },
    {
      name: 'THÙY CHI',
    },
    {
      name: 'DZUS Records',
    },
    {
      name: ' Lion Heart',
    },
    {
      name: 'Trực Tiếp Game',
    },
    {
      name: 'Phê Game',
    },
    {
      name: 'DOLLARplays',
    },
  ];
}
