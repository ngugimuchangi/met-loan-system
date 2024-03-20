import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { User } from '../model/user';
import { AuthService } from '../auth/auth.service';
import { Subject, fromEvent, takeUntil } from 'rxjs';

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
  private destroy$ = new Subject<void>();

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser as User;
    fromEvent(window, 'resize').pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.screenWidth = window.innerWidth;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  get isMobile() {
    return this.screenWidth < 768;
  }

  toggleSidenav(): void {
    if (this.isMobile) this.sidenav.toggle();
  }

  logout(): void {
    this.authService.logout();
  }
}

