import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees = [
    {
      name: 'Dion',
      job: 'Developer',
    },
    {
      name: 'Bob',
      job: 'Marketing Inter',
    },
    {
      name: 'Tyan',
      job: 'Sales Rep',
    },
  ];

  onEmployeeAdded(newEmployee: { name: string; job: string }) {
    this.employees.push(newEmployee);
  }
}
