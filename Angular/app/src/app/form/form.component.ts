import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form = document.getElementById('form');
  username = document.getElementById('uname');
  password = document.getElementById('password');
  email = document.getElementById('email');
  name = document.getElementById('name');

  usernameValue = '';
  emailValue = '';
  passwordValue = '';
  nameValue = '';

  updateInputValue = (event: Event, input: string) => {
    if (input == 'uname') {
      this.usernameValue = (<HTMLInputElement>event.target).value;
    } else if (input == 'password') {
      this.passwordValue = (<HTMLInputElement>event.target).value;
    } else if (input == 'email') {
      this.emailValue = (<HTMLInputElement>event.target).value;
    } else if (input == 'name') {
      this.nameValue = (<HTMLInputElement>event.target).value;
    }
  };

  usernameInputControlClass = 'input-control';
  passwordInputControlClass = 'input-control';
  emailInputControlClass = 'input-control';
  nameInputControlClass = 'input-control';

  validateInputs = (e: Event) => {
    e.preventDefault();
    // let usernameValue = (<HTMLInputElement>this.username).value;
    // const emailValue = (<HTMLInputElement>this.email).value;
    // const passwordValue = (<HTMLInputElement>this.password).value;
    // const nameValue = (<HTMLInputElement>this.name).value;

    // const usernameValue = this.username.value;
    // const emailValue = this.email.value;
    // const passwordValue = this.password.value;
    // const nameValue = this.name.value;

    if (this.usernameValue === '') {
      this.setError(this.username, 'Username is required', 'uname');
    } else {
      this.setSuccess(this.username, 'uname');
    }

    if (this.emailValue === '') {
      this.setError(this.email, 'Email is required', 'email');
    } else if (!this.isValidEmail(this.emailValue)) {
      this.setError(this.email, 'Provide a valid email address', 'email');
    } else {
      this.setSuccess(this.email, 'uname');
    }

    if (this.passwordValue === '') {
      this.setError(this.password, 'Password is required', 'password');
    } else if (this.passwordValue.length < 8) {
      this.setError(
        this.password,
        'Password must be at least 8 character.',
        'password'
      );
    } else {
      this.setSuccess(this.password, 'uname');
    }

    if (this.nameValue === '') {
      this.setError(this.name, 'Name is required', 'name');
    } else {
      this.setSuccess(this.name, 'uname');
    }
  };

  setError = (element: any, message: string, id: string) => {
    if (id == 'username') {
      this.usernameInputControlClass = 'input-control error';
    } else if (id == 'password') {
      this.passwordInputControlClass = 'input-control error';
    } else if (id == 'email') {
      this.emailInputControlClass = 'input-control error';
    } else if (id == 'name') {
      this.nameInputControlClass = 'input-control error';
    }

    // const errorDisplay = element.parentElement.querySelector('.error');

    // errorDisplay.innerText = message;

    // element.parentElement.classList.add('error');
    // element.parentElement.classList.remove('success');
  };

  setSuccess = (element: any, id: string) => {
    if (id == 'username') {
      this.usernameInputControlClass = 'input-control error';
    } else if (id == 'password') {
      this.passwordInputControlClass = 'input-control error';
    } else if (id == 'email') {
      this.emailInputControlClass = 'input-control error';
    } else if (id == 'name') {
      this.nameInputControlClass = 'input-control error';
    }

    // const errorDisplay = element.parentElement.querySelector('.error');

    // errorDisplay.innerText = '';
    // element.parentElement.classList.add('success');
    // element.parentElement.classList.remove('error');
  };

  isValidEmail = (email: any) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
}
