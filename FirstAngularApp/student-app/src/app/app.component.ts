import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentProfileComponent } from "./student-profile/student-profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-app';
}
