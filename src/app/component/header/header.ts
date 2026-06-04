import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private http = inject(HttpClient);
  private userService = inject(UserService);
  
  getDataFromAPI() {
    this.http.get<any>('https://dummyjson.com/users')
    .subscribe({
      next: (response) => {
        this.userService.setUsers(response.users)
      },
      error: (err) => {
        console.error('Failed to fetch users:', err);
      }
    });
  }
}
