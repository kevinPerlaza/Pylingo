
import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

const FAKE_USERS_DB_KEY = 'pylingo_users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = signal<User | null>(null);

  constructor() {}

  loadUser(): void {
    const userJson = localStorage.getItem('pylingo_current_user');
    if (userJson) {
      this.currentUser.set(JSON.parse(userJson));
    }
  }

  login(email: string, password_unused: string): { success: boolean, message: string } {
    const users = this.getUsersFromDb();
    const user = users.find(u => u.email === email);
    if (user) {
      this.setCurrentUser(user);
      return { success: true, message: '¡Inicio de sesión exitoso!' };
    }
    return { success: false, message: 'Usuario no encontrado.' };
  }

  register(email: string, password_unused: string): { success: boolean, message: string } {
    const users = this.getUsersFromDb();
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'Ya existe un usuario con este correo.' };
    }
    const newUser: User = { email, completedLessons: [] };
    users.push(newUser);
    localStorage.setItem(FAKE_USERS_DB_KEY, JSON.stringify(users));
    this.setCurrentUser(newUser);
    return { success: true, message: '¡Registro exitoso!' };
  }

  logout(): void {
    localStorage.removeItem('pylingo_current_user');
    this.currentUser.set(null);
  }
  
  completeLesson(lessonId: string): void {
    const user = this.currentUser();
    if (user && !user.completedLessons.includes(lessonId)) {
      const updatedUser = {
        ...user,
        completedLessons: [...user.completedLessons, lessonId],
      };
      this.updateUserInDb(updatedUser);
      this.setCurrentUser(updatedUser);
    }
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem('pylingo_current_user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  private getUsersFromDb(): User[] {
    const usersJson = localStorage.getItem(FAKE_USERS_DB_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  private updateUserInDb(updatedUser: User): void {
    const users = this.getUsersFromDb();
    const userIndex = users.findIndex(u => u.email === updatedUser.email);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem(FAKE_USERS_DB_KEY, JSON.stringify(users));
    }
  }
}
