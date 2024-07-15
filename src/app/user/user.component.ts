import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  private userService = inject(UserService);
  users: any = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next: (users: any) =>{
        this.users = users;
        console.log("Users fetched successfully");
      },
      error: (error) => console.log('Error fetching users:', error)
    });
  }

}
