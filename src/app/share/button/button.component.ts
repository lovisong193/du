import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  btn = [
    
  {
    name: 'Tất cả',
  }
  ,
  {
    name: 'Âm nhạc',

  }
  ,
  {
    name: 'Danh sách kết hợp',
  }
  ,
  {
    name: 'Trò chơi',
  }
  ,
  {
    name: 'Podcast',
  }
  ,
  {
    name: 'Trò chơi phiêu lưu',
  }
  ,
  {
    name: 'Đọc rap',
  }
  ,
  {
    name: 'Hoạt ảnh'
  }
  ,
  {
    name: 'Bóng đá'
  }
  ,
  {
    name: 'Mới tải lên gần đây'
  }
  ,
  {
    name: 'Đã xem'
  }
  , 
  {
    name: 'Hoạt động gần đây'
  }
]

@ViewChild('scrollBox') scrollBox!: ElementRef;

scrollLeft() {
  this.scrollBox.nativeElement.scrollLeft -= 300;
}

scrollRight() {
  this.scrollBox.nativeElement.scrollLeft += 300;
}
}
