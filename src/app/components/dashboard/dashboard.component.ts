import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  FooterComponent,
  ListUsersComponent,
  NavbarComponent,
} from './components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, ListUsersComponent, NavbarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
