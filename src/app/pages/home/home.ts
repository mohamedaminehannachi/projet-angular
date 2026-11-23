import { Component } from '@angular/core';
import { UserProfile } from './user-profile';
import { FriendsList } from './friends-list';
import { Notifications } from './notifications';

@Component({
  selector: 'app-home',
  imports: [UserProfile, FriendsList, Notifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}