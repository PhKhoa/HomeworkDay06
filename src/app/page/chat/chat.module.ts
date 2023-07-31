import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './component/chat/chat.component';
import { ChatBoxComponent } from './component/chat-box/chat-box.component';
import { ChatControlComponent } from './component/chat-control/chat-control.component';
import { FriendListComponent } from './component/friend-list/friend-list.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ChatBoxComponent,
    ChatControlComponent,
    FriendListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
