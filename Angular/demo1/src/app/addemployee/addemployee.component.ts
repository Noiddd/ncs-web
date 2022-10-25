import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent implements OnInit {
  @Output() employeeAdded = new EventEmitter<{
    name: string;
    job: string;
  }>();

  recieveData(addName: string, addJob: string) {
    this.employeeAdded.emit({
      name: addName,
      job: addJob,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
