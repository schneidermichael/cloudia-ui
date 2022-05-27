import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/service/authentication.service';

@Component({
  selector: 'app-resend-registration',
  templateUrl: './resend-registration.component.html'
})
export class ResendRegistrationComponent {

  formResendRegistration: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {

    this.formResendRegistration = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  resendRegistration() {

    const formValue = this.formResendRegistration.value;

    if (formValue.email) {
      return this.router.navigateByUrl('success');
      // this.authenticationService.resendRegistration(formValue.email)
      //   .subscribe(
      //     {
      //       //next: (v) => console.log(v),
      //       //error: (e) => console.error(e),
      //       complete: () => this.router.navigateByUrl('success')
      //     }
      //   );
    }
    return this.router.navigateByUrl('success');

  }



}
