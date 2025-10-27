import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson, LessonStep, MultipleChoiceQuestion } from '../../models/course.model';

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class LessonComponent {
  lesson = input.required<Lesson>();
  lessonComplete = output<string>();
  exitLesson = output<void>();

  currentStepIndex = signal(0);
  selectedAnswer = signal<string | null>(null);
  answerStatus = signal<AnswerStatus>('unanswered');

  get currentStep(): LessonStep {
    return this.lesson().steps[this.currentStepIndex()];
  }
  
  get progressPercentage(): number {
    return ((this.currentStepIndex() + 1) / this.lesson().steps.length) * 100;
  }

  isQuestion(step: LessonStep): step is MultipleChoiceQuestion {
    return step.type === 'multiple-choice';
  }

  selectAnswer(option: string): void {
    if (this.answerStatus() !== 'unanswered') return;
    this.selectedAnswer.set(option);
  }

  checkAnswer(): void {
    const step = this.currentStep;
    if (!this.isQuestion(step) || !this.selectedAnswer()) return;

    if (this.selectedAnswer() === step.correctAnswer) {
      this.answerStatus.set('correct');
    } else {
      this.answerStatus.set('incorrect');
    }
  }

  continue(): void {
    if (this.currentStepIndex() < this.lesson().steps.length - 1) {
      this.currentStepIndex.update(i => i + 1);
      this.selectedAnswer.set(null);
      this.answerStatus.set('unanswered');
    } else {
      this.lessonComplete.emit(this.lesson().id);
    }
  }

  goBack(): void {
    if (this.currentStepIndex() > 0) {
      this.currentStepIndex.update(i => i - 1);
      this.selectedAnswer.set(null);
      this.answerStatus.set('unanswered');
    }
  }
}