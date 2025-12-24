import { Component } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item-model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent {
myData = [
    {
      name: 'tuan vu',
      Image: 'assets/img/channel-picture/unnamed.jpg',
    },
  ];

  menuItem: MenuItem[] = [
    { label: 'Tài khoản Google', icon: 'pi pi-user' },
    { label: 'Chuyển đổi tài khoản', icon: 'pi pi-cog' },
    {
      label: 'Đăng xuất',
      icon: 'pi pi-sign-out',
      hasBoolean: true,
    },
    {
      label: ' Youtube Studio',
      icon: 'pi pi-video',
      routeLink: 'stu',
    },
    {
      label: 'Giao dịch mua và gói thành viên',
      hasBoolean: true,
      icon: 'pi pi-dollar',
    },
    { label: 'Dữ liệu của bạn trong YouTube', icon: 'pi pi-chart-line' },
    {
      label: 'Giao diện: Giao diện thiết bị',
      icon: 'pi pi-desktop',
    },
    { label: 'Ngôn ngữ hiển thị: Tiếng Việt', icon: 'pi pi-globe' },
    {
      label: 'Chế độ hạn chế: Đã tắt',
      icon: 'pi pi-toggle-off',
    },
    {
      label: 'Địa điểm: Việt Nam',
      icon: 'pi pi-globe',
    },
    { label: 'Phím tắt', icon: 'pi pi-key', hasBoolean: true },
    { label: 'Cài đặt', icon: 'pi pi-cog', hasBoolean: true },
    {
      label: 'Trợ giúp',
      icon: 'pi pi-question',
    },
    {
      label: 'Gửi ý kiến phản hồi',
      icon: 'pi pi-comment',
    },
  ];
}
