import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardUserComponent } from './components';
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, CardUserComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  listUsers: any[] = [];
  loading = false;
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;

    this._userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);

        this.loading = false;

        this.listUsers = data;
      },
      error: (error) => {
        console.log(error);

        this.loading = false;
      },
    });
  }
}
