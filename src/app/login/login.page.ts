import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  miForm: any;
  login: boolean = false;

  constructor(private fb: FormBuilder) {
    this.miForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  doLogin() {
    if(this.miForm.dirty && this.miForm.valid) {
      console.log("Email: " + this.miForm.value.email);
      console.log("Password: " + this.miForm.value.password);
      this.login = true;
    }
  }
}
