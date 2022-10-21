import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  color = 'green';

  colorValue = false;
  greenColor = 'green';
  blueColor = 'blue';
  txt = 0.5;

  getColor = 'black';

  allStyles = {
    color: this.greenColor,
    fontStyle: 'italic',
    opacity: this.txt,
  };

  green() {
    this.getColor = 'green';
  }
  red() {
    this.getColor = 'red';
  }

  constructor() {}

  ngOnInit(): void {}
}
