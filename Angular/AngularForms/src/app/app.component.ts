import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  countries = ['Singapore', 'Korea'];

  public test = new User(
    'Dion',
    'dion@gmail.com',
    43434343,
    'password',
    'singapore',
    'male',
    true
  );
}
