import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-buttom',
  templateUrl: './menu-buttom.component.html',
  styleUrls: ['./menu-buttom.component.scss']
})
export class MenuButtomComponent {

  menu: Array<any> = [
    { name: 'Unmute', icon: 'uil uil-microphone-slash'},
    { name: 'Start Video', icon: 'uil uil-video-slash'},
    { name: 'Share', icon: 'uil uil-share'},
    { name: 'Home', icon: 'uil uil-estate'},
  ];

}
