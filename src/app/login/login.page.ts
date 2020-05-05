import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  miForm: any;
  login: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.miForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  doLogin() {
    if(this.miForm.dirty && this.miForm.valid) {
      console.log("Email: " + this.miForm.value.email);
      console.log("Password: " + this.miForm.value.password);
      this.router.navigateByUrl('/cards');
      this.login = true;
    }
  }
}
