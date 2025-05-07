import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css',
})
export class StudentProfileComponent {
  name = 'Kawsu';
  age = '30';

  sayHello():void {
    alert("welcome to web II!");
  }
}
