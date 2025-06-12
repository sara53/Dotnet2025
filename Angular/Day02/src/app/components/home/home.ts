import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  selectedDepartment: string = 'All';
  itiTracks: { id: number; name: string; department: string }[] = [
    {
      id: 1,
      name: 'Dotnet',
      department: 'sd',
    },
    {
      id: 2,
      name: 'Cross Platform',
      department: 'sd',
    },
    {
      id: 3,
      name: 'PD',
      department: 'sd',
    },
    {
      id: 4,
      name: 'java',
      department: 'java',
    },
    {
      id: 5,
      name: 'Mobile',
      department: 'java',
    },
    {
      id: 6,
      name: '2d Graphics',
      department: 'graphics',
    },
  ];
  filteredTracks: { id: number; name: string; department: string }[] =
    this.itiTracks;
  filter() {
    this.filteredTracks =
      this.selectedDepartment == 'All'
        ? this.itiTracks
        : this.itiTracks.filter(
            (track) =>
              track.department.toLowerCase() ==
              this.selectedDepartment.toLowerCase()
          );
  }
}
