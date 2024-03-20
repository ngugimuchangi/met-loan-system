import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf, RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule,
    MatIconModule, MatSidenavModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  user!: User;
  screenWidth: number = window.innerWidth;
  screenWidthListener: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser as User;
    this.screenWidthListener = window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.screenWidthListener);
    this.screenWidthListener = null;
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
  }
}

