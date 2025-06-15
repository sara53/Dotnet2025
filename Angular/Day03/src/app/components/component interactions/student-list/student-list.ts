import { Component } from '@angular/core';
import { StudentDetails } from '../student-details/student-details';

@Component({
  selector: 'app-student-list',
  imports: [StudentDetails],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  studentList: { id: number; name: string; age: number }[] = [];
  constructor() {
    this.studentList = [
      {
        id: 1,
        name: 'ali',
        age: 20,
      },
      {
        id: 2,
        name: 'Mona',
        age: 20,
      },
    ];
  }
}
