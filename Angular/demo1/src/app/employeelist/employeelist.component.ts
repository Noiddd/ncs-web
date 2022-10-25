import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  @Input() employee: { name: string; job: string };

  constructor() {}

  ngOnInit(): void {}
}
