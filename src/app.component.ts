
import { Component, ChangeDetectionStrategy, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { Lesson } from './models/course.model';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LoginComponent, HomeComponent, LessonComponent],
})
export class AppComponent {
  private authService = inject(AuthService);
  
  view = signal<'login' | 'home' | 'lesson'>('login');
  currentUser = this.authService.currentUser;
  currentLesson = signal<Lesson | null>(null);

  constructor() {
    this.authService.loadUser();
    if (this.currentUser()) {
      this.view.set('home');
    }

    effect(() => {
      if (!this.currentUser()) {
        this.view.set('login');
      }
    });
  }

  onLoginSuccess(user: User): void {
    this.view.set('home');
  }

  onStartLesson(lesson: Lesson): void {
    this.currentLesson.set(lesson);
    this.view.set('lesson');
  }

  onLessonComplete(lessonId: string): void {
    this.authService.completeLesson(lessonId);
    this.currentLesson.set(null);
    this.view.set('home');
  }
  
  onExitLesson(): void {
    this.currentLesson.set(null);
    this.view.set('home');
  }

  logout(): void {
    this.authService.logout();
  }
}
