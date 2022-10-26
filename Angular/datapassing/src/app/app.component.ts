import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputName = '';
  inputAge = '';
  inputJob = '';
  msg = '';

  logData(name: string, age: string, job: string) {
    this.inputName = name;
    this.inputAge = age;
    this.inputJob = job;
  }
}
