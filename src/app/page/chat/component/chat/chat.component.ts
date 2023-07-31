import { Component,Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Friendship } from 'src/models/friendship';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  friendship: Friendship | null = null;

  constructor(public userService:UserService, public router : Router){
    this.userService.userInfo.subscribe((user) =>{
      if (user == null){
        this.router.navigate(['/login']);
      }
    });
  }

  selectFriend($event: Friendship) {
    console.log($event);
    this.friendship = $event;
  }
}
