import { Injectable } from '@angular/core';
import { Peer } from 'peerjs';

@Injectable({
  providedIn: 'root'
})
export class PeerService {
  public peer: any;

  constructor() { 
    this.peer = new Peer({
      host: "localhost",
      port: 3001,
    });
  }
}
