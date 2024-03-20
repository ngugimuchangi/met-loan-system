import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { users } from '../data/user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get users() {
    return users;
  }

  getUserById(id: string) {
    return users.find(user => user.id === id);
  }

  getUserByEmail(email: string) {
    return users.find(user => user.email === email);
  }

  updateUser(id: string, update: Partial<User>) {
    const index = users.findIndex(user => user.id === id);
    const user = users[index];
    Object.assign(user, update);
  }
}
