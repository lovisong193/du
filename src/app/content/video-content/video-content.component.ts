import { Component } from '@angular/core';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss']
})
export class VideoContentComponent {
    comment = [{
      img: 'assets/img/channel-picture/unnamed.jpg',
      name: '@tuan vu',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos, eveniet temporibus laccusantium vero eligendi vitae vel sit atque, culpa quaerat.',
      thumbup: 'pi pi-thumbs-up',
      thumbdown: 'pi pi-thumbs-down',
      rep: 'Phản hồi', 
      }
      ,
      {
        img: 'assets/img/channel-picture/unnamed.jpg',
        name: '@chim to',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos, eveniet temporibus laccusantium vero eligendi vitae vel sit atque, culpa quaerat.',
        thumbup: 'pi pi-thumbs-up',
        thumbdown: 'pi pi-thumbs-down',
        rep: 'Phản hồi',
      }
      ,
      {
        img: 'assets/img/channel-picture/unnamed.jpg',
        name: '@chim hoi to',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos, eveniet temporibus laccusantium vero eligendi vitae vel sit atque, culpa quaerat.',
        thumbup: 'pi pi-thumbs-up',
        thumbdown: 'pi pi-thumbs-down',
        rep: 'Phản hồi',
      }
      ,
      {
        img: 'assets/img/channel-picture/unnamed.jpg',
        name: '@chim sieu to',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos, eveniet temporibus laccusantium vero eligendi vitae vel sit atque, culpa quaerat.',
        thumbup: 'pi pi-thumbs-up',
        thumbdown: 'pi pi-thumbs-down',
        rep: 'Phản hồi',
      }
    ]
}
