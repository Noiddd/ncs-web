import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees = [
    { id: 1, name: 'Dion', Dept: 'Developer' },
    { id: 2, name: 'Alvin', Dept: 'Developer' },
    { id: 3, name: 'Georgene', Dept: 'Interior Designer' },
    { id: 4, name: 'Qihan', Dept: 'Investment Banker' },
    { id: 4, name: 'Jon', Dept: 'Consultant' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
