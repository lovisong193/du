import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dif-header',
  templateUrl: './dif-header.component.html',
  styleUrls: ['./dif-header.component.scss']
})
export class DifHeaderComponent {
@Output() toggleStuSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleStuSidebar.emit();
  }
}
