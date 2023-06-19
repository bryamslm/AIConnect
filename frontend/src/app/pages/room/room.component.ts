import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatAll } from 'rxjs';
import { PeerService } from 'src/app/peer.service';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit{
  currentStream: any;
  roomName: any;
  // listUser like array any 
  listUser: Array<any> = [];

  constructor(private route: ActivatedRoute, private socketService: WebSocketService, 
    private peerService: PeerService) {
    this.roomName = this.route.snapshot.paramMap.get('id');
    
   }

  initPeer = () => {
    const { peer }  = this.peerService;
    peer.on('open', (id: any) => {
      const body = {
        idPeer: id,
        roomName: this.roomName
      }
      console.log("--------- ID - PEER -----------", id);
      this.socketService.joinRoom(body);
      
    });

    peer.on('call', (callEnter: any) => {
      callEnter.answer(this.currentStream);
      callEnter.on('stream', (streamRemote: any) => {
        this.addVideoUser(streamRemote);
      }, 
      (err: any) => {
        console.log("--------- ERROR - PEER CALL -----------", err);
      }
      );
    });
  }

  initSocket = () => {
    this.socketService.cbEvent.subscribe((res: any) => {
      console.log("--------- DATA - SOCKET -----------", res);
    });
  }

  checkMediaDevices = () => {
   if(navigator && navigator.mediaDevices){
    navigator.mediaDevices.getUserMedia({ 
      video: true, 
      //audio: true 
    }).then((stream) => {
      this.currentStream = stream;
      this.addVideoUser(stream);

    }).catch((err) => {
      alert('Sorry, camera not permissions.');
    });
   }else{
      alert('Sorry, camera not available.');
   }
  }

  addVideoUser = (stream: any) => {
    //agregar si no existe
    if(this.listUser.indexOf(stream) === -1){
      this.listUser.push(stream);
    }
    //this.listUser.push(stream);
    
  }

  ngOnInit(): void {
    this.checkMediaDevices();
    this.initPeer();
    this.initSocket();
  }

}
