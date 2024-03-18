import { Injectable } from '@angular/core';
import { User, users } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;
  users: User[] = users;

  constructor(private router: Router) { }

  /**
   * Log the user in
   * @param email - The email of the user
   * @param password - The password of the user
   */
  login(email: string, password: string) {
    const user = this.users.find((user) => user.email === email && user.password === password);
    if (!user) throw new Error('Invalid credentials');
    this.currentUser = user;
    this.router.navigateByUrl('/dashboard');
  }

  /**
   * Log the user out
   */
  logout() {
    this.currentUser = null;
    this.router.navigateByUrl('/login');
  }

  /**
   * Check if the user is logged in
   * @returns true if the user is logged in, false otherwise
   */
  isLoggedIn() {
    return !!this.currentUser;
  }
}
