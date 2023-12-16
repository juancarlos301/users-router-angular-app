import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.css',
})
export class CardUserComponent implements OnInit {
  @Input() user: any;
  imgUrl: string = '';
  name: string = '';
  email: string = '';
  id: number = 0;

  ngOnInit(): void {
    this.email = this.user.email;
    this.name = this.user.name;
    this.imgUrl = 'http://lorempixel.com.br/400/400/?' + this.user.id;
    this.id = this.user.id;
  }
}
