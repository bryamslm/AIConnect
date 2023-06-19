import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { VideoPlayerComponent } from './component/video-player/video-player.component';
import { MenuButtomComponent } from './component/menu-buttom/menu-buttom.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";

const config: SocketIoConfig = { url: 'http://localhost:3002', options: {withCredentials: true} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    VideoPlayerComponent,
    MenuButtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [VideoPlayerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
