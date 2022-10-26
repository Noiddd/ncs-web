import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test123',
  templateUrl: './test123.component.html',
  styleUrls: ['./test123.component.css'],
})
export class Test123Component implements OnInit {
  @Input() name: string = '';
  @Input() age: string = '';
  @Input() job: string = '';

  message = 'This is a message from test123 component';
  @Output() childEmitter = new EventEmitter();

  fireMessage() {
    this.childEmitter.emit(this.message);
  }

  constructor() {}

  ngOnInit(): void {}
}
