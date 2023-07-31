import { Component, Input,OnInit } from '@angular/core';
import { UserInfo } from 'src/models/user-info';
import { UserService } from '../../services/user.service';
import { FriendshipService } from '../../services/friendship.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit{
  @Input() user: UserInfo | null= {
    id:'001',
    name:'Zed',
    email:'abc@gmail.com',
    avatarUrl:'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2018/05/cho-canh-cho-corgi-cho-tot.jpg'
  }

  constructor(public userService:UserService, public friendshipService:FriendshipService){}

  productForm !: FormGroup;
  ngOnInit(): void {
    this.productForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  async addFriend(value:string) {
    let yEmail = value;
    if (yEmail) {
      if (this.user == null) {
        return;
      }
      let result = await this.friendshipService.addFriendship(
        this.user!.email,
        yEmail
      );
      console.log(yEmail);
      if (result) {
        alert('Add friend success');
      } else {
        alert('Add friend failed');
      }
    }
  }
}
