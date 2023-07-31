import { Component,Output,EventEmitter } from '@angular/core';
import { FriendshipService } from '../../services/friendship.service';
import { Friendship } from 'src/models/friendship';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
  friendList: Array<Friendship> = [];
  @Output() selectedFriend: EventEmitter<Friendship> = new EventEmitter();
  
  constructor(public friendshipService:FriendshipService,public userService: UserService,){
    this.userService.userInfo.subscribe((user) => {
      if (user == null) {
        return;
      }
      this.friendshipService.getFriendList(user?.email ?? '');
    });

    this.friendshipService.friendList.subscribe((friendship) => {
      if (friendship == null) {
        return;
      }
      if (
        !this.friendList
          .map((f) => f.friendEmail)
          .includes(friendship.friendEmail)
      ) {
        this.friendList.push(friendship);
        //console.log(friendship);
      }
    });
  }

  chatWith(friendship: Friendship) {
    console.log(friendship);
    this.selectedFriend.emit(friendship);
  }
}
