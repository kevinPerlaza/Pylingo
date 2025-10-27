
import { Component, ChangeDetectionStrategy, output, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { AuthService } from '../../services/auth.service';
import { Lesson, Course } from '../../models/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class HomeComponent {
  startLesson = output<Lesson>();

  private courseService = inject(CourseService);
  private authService = inject(AuthService);

  course: Course = this.courseService.getCourse();
  currentUser = this.authService.currentUser;

  completedLessons = computed(() => new Set(this.currentUser()?.completedLessons ?? []));

  isLessonUnlocked(lessonIndex: number, moduleIndex: number): boolean {
    if (moduleIndex === 0 && lessonIndex === 0) return true;
    
    let previousLesson: Lesson | undefined;
    if (lessonIndex > 0) {
      previousLesson = this.course.modules[moduleIndex].lessons[lessonIndex - 1];
    } else { // First lesson of a module (but not the very first module)
      const prevModule = this.course.modules[moduleIndex - 1];
      previousLesson = prevModule.lessons[prevModule.lessons.length - 1];
    }
    
    return previousLesson ? this.completedLessons().has(previousLesson.id) : false;
  }
}
