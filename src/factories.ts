// src/factories.js (or src/factories.ts if using TypeScript)
import { Factory } from 'miragejs';

export const ClassFactory = Factory.extend({
  name: 'Math', // Default name for class
});

export const StudentFactory = Factory.extend({
  name: 'John Doe', // Default name for student
});

export const TeacherFactory = Factory.extend({
  name: 'Jane Doe', // Default name for teacher
});

export const ExamFactory = Factory.extend({
  name: 'Math Test', // Default name for exam
});
