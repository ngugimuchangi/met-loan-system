import { Injectable } from '@angular/core';
import { User, users } from './user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private users: User[] = users;

  constructor(private router: Router) { }

  login(email: string, password: string) {
    const user = this.users.find((user) => user.email === email && user.password === password);
    if (!user) throw new Error('Invalid credentials');
    this.currentUser = user;
    this.router.navigateByUrl('/home');
  }

  logout() {
    this.currentUser = null;
    this.router.navigateByUrl('/login');
  }
}
