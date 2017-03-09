export var POLISH_GRADES = {
  0: '',
  1: 'niedostateczny',
  2: 'dopuszczający',
  3: 'dostateczny',
  4: 'dobry',
  5: 'bardzo dobry',
  6: 'celujący'
}

export var AMERICAN_GRADES = {
  0: '',
  1: 'F',
  2: 'D',
  3: 'C',
  4: 'B',
  5: 'A',
  6: 'A+'
}

export interface Subject {
  name: string;
  grade: number;
  technical: boolean;
}

export interface Exam {
  name: string;
  score: number;
}

export interface School {
  name: string;
  codename: string;
  logo: boolean;
  exams: Exam[];
  subjects: Subject[];
  technical_subjects: Subject[];
  background_color: string;
  foreground_color: string;
}