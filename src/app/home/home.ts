import { Component, inject, signal } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private userService = inject(UserService);
  users = this.userService.users;
  
  deleteUser(id:any){
    this.userService.deleteUser(id);
  }
}
