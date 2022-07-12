import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required]
    });
  }

   login() {

    const formValue = this.loginForm.value;

    if (this.loginForm.status == "VALID") {
      this.authenticationService.login(formValue.email, formValue.password)
        .subscribe( (response: any) => {
          this.authenticationService.setToken(response['access_token']);
          this.router.navigateByUrl('home');
        });
    }
  }

  get email() { return this.loginForm.get('email') as FormControl; }
  get password() { return this.loginForm.get('password') as FormControl; }

}
