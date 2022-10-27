import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getAllEmployees() {
    return [
      { id: 1, name: 'Dion', Dept: 'Developer' },
      { id: 2, name: 'Alvin', Dept: 'Developer' },
      { id: 3, name: 'Georgene', Dept: 'Interior Designer' },
      { id: 4, name: 'Qihan', Dept: 'Investment Banker' },
      { id: 5, name: 'Jon', Dept: 'Consultant' },
      { id: 6, name: 'Hello', Dept: 'dsdsds ' },
    ];
  }
}
