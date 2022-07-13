import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/service/authentication.service';
import {Country} from "../../shared/interface/country";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  countries : Country[] | undefined;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      national: ['', Validators.required]
    });
    this.authenticationService.getCountries().subscribe(value => this.countries = value)
  }


  register() {

    const formValue = this.registerForm.value;

    if (this.registerForm.status == "VALID") {
      this.authenticationService.register(formValue.firstName, formValue.lastName, formValue.email, formValue.password, formValue.national, window.location.host)
        .subscribe(() => this.router.navigateByUrl('success'));
    }

  }
  get firstName() { return this.registerForm.get('firstName') as FormControl; }
  get lastName() { return this.registerForm.get('lastName') as FormControl; }
  get email() { return this.registerForm.get('email') as FormControl; }
  get password() { return this.registerForm.get('password') as FormControl; }
  get national() { return this.registerForm.get('national') as FormControl; }

}
