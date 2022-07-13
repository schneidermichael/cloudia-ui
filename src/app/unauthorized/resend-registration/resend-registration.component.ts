import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/service/authentication.service';

@Component({
  selector: 'app-resend-registration',
  templateUrl: './resend-registration.component.html'
})
export class ResendRegistrationComponent {

  host = "";

  formResendRegistration: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {

    this.formResendRegistration = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    });
    this.host = window.location.host
  }

  resendConformation() {
    if (this.formResendRegistration.status == "VALID") {
      this.authenticationService.resendConformation(this.formResendRegistration.value.email, this.host)
        .subscribe(() => this.router.navigateByUrl('success'));
    }
  }

  get email() { return this.formResendRegistration.get('email') as FormControl; }
}
