import { Lesson } from './lesson';
export interface Course {
  _id: string;
  name: string;
  category: string;
  // ? = operador Elvis = deixa opcional
  lesson?: Lesson[];
}
