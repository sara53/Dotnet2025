import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  @Input() student!: { id: number; name: string; age: number };
}
