
export interface Course {
  id: string;
  title: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  steps: LessonStep[];
}

export type LessonStep = ExplanationStep | MultipleChoiceQuestion;

export interface Step {
  type: 'explanation' | 'multiple-choice';
}

export interface ExplanationStep extends Step {
  type: 'explanation';
  title: string;
  content: string;
  code?: string;
}

export interface MultipleChoiceQuestion extends Step {
  type: 'multiple-choice';
  question: string;
  code?: string;
  options: string[];
  correctAnswer: string;
}
