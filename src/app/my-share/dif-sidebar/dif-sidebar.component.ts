import { Component, Input } from '@angular/core';
import { hostData, iconItem  } from 'src/app/model/menu-item-model';

@Component({
  selector: 'app-dif-sidebar',
  templateUrl: './dif-sidebar.component.html',
  styleUrls: ['./dif-sidebar.component.scss']
})
export class DifSidebarComponent {
  @Input() expanded = true;

  iconItem: iconItem[] = [
  {
    label: 'Tổng quan',
    icon: 'pi pi-crown'
  }
  ,
  {label: 'Nội dung',
  icon: 'pi pi-video'
  }
  , 
  {
  label: 'Số liệu phân tích',
  icon: 'pi pi-chart-line'
  }
  ,
  {
    label: 'Cộng đồng',
    icon: 'pi pi-users'
  }
  ,
  {
    label: 'Phụ đề',
    icon: ' pi pi-filter'
  }
  ,
  {
    label: 'Phát triển nội dung',
    icon: 'pi pi-cog'
  }
  ,
  {
    label: 'Kiếm tiền',
    icon: 'pi pi-money-bill'
  }
  ,
  {
    label: ' Tùy chỉnh',
    icon: 'pi pi-face-smile'
  }
  ,
  {
    label: 'Thư viên âm thanh',
    icon: 'pi pi-volume-up'
  }
  ,
  {
    label: 'Cài đặt',
    icon: 'pi pi-cog'
  }
  ,
  {
    label: 'Gửi ý kiến phản hồi',
    icon: 'pi pi-send'
  }
]
 
host: hostData[] = [
  {
    label: 'Kênh của bạn',
    img: 'assets/img/channel-picture/unnamed.jpg',
    name: 'tuan vu'
  }
]
}
