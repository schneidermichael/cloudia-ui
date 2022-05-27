import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      national: ['', Validators.required]
    });
  }


  register() {

    const formValue = this.registerForm.value;

    if (formValue.firstName && formValue.lastName && formValue.email && formValue.password && formValue.national) {
      this.authenticationService.register(formValue.firstName, formValue.lastName, formValue.email, formValue.password, formValue.national)
        .subscribe(
          {
            next: (v) => console.log(v),
            error: (e) => console.error(e),
            complete: () => this.router.navigateByUrl('success')
          }
        );
    }
  }

}
