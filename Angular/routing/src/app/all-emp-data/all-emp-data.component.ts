import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-emp-data',
  templateUrl: './all-emp-data.component.html',
  styleUrls: ['./all-emp-data.component.css'],
})
export class AllEmpDataComponent implements OnInit {
  employees: any = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployees();
  }
}
