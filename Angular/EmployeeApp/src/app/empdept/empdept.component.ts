import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdept',
  templateUrl: './empdept.component.html',
  styles: [],
})
export class EmpdeptComponent implements OnInit {
  employees: any = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
  }
}
