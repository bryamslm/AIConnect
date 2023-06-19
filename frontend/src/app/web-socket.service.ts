import { Call } from '@angular/compiler';
import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  events = ['new-user', 'bye-user']
  public cbEvent: EventEmitter<any> = new EventEmitter();

  constructor(private socket: Socket) { 
    this.listener();
  }

  listener = () => {
    this.events.forEach(event => {
      this.socket.on(event, (data: any) => {
        this.cbEvent.emit({
          name: event, 
          data: data
        });
      });
    })
  }

  joinRoom = (data: any) => {
    console.log("--------- INTO JOIN ROOM -----------");
    this.socket.emit('join', data);
  }
}
