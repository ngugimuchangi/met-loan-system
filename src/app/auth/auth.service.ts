import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;

  constructor(private router: Router, private userService: UserService) { }
  login(email: string, password: string) {
    const user = this.userService.getUserByEmail(email);
    if (!user || user.password !== password) throw new Error('Invalid credentials');

    this.currentUser = user;
    this.router.navigateByUrl('/');
  }

  logout() {
    this.currentUser = null;
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  isAdmin() {
    return this.currentUser?.role === 'admin';
  }
}
