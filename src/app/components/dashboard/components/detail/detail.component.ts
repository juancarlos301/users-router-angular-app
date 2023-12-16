import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  id: number;
  name = '';
  email = '';
  imageUrl = '';
  gender = '';

  constructor(
    private aRoute: ActivatedRoute,
    private _userService: UserService,
    private router: Router
  ) {
    this.id = parseInt(this.aRoute?.snapshot?.paramMap?.get('id') || '0');
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.name = data.name;
        this.email = data.email;
        this.gender = data.gender;
        this.imageUrl = 'http://lorempixel.com.br/400/400/?' + this.id;
      },
      error: () => {
        this.redirect();
      },
    });
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
