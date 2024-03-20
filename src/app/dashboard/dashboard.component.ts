import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule,
    MatIconModule, MatSidenavModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user!: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser as User;
  }

  logout(): void {
    this.authService.logout();
  }
}

