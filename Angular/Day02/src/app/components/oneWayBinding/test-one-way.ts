import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one-way',
  imports: [],
  templateUrl: './test-one-way.html',
  styleUrl: './test-one-way.css',
})
export class TestOneWay {
  flag: boolean = false;
  trackName: string = 'Dotnet';
  imgSrc1: string = '1.jpg';
  imgSrc2: string = 'images/2.jpg';
  // user: { id: number; name: string; password: string } | undefined = {
  //   id: 1,
  //   name: 'Ali',
  //   password: 'ALI!@#',
  // };
  user?: { id: number; name: string; password: string } = {
    id: 1,
    name: 'Ali',
    password: 'ALI!@#',
  };

  fname!: string;
}
