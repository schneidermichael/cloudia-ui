import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/service/authentication.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html'
})
export class LostPasswordComponent {

  formLostPassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {

    this.formLostPassword = this.formBuilder.group({
      email: ['', Validators.required]
    });

  }

  lostPassword() {

    const formValue = this.formLostPassword.value;

    if (formValue.email) {
      return this.router.navigateByUrl('success');
      // this.authenticationService.lostPassword(formValue.email)
      //   .subscribe(
      //     {
      //       next: (v) => console.log(v),
      //       error: (e) => console.error(e),
      //       complete: () => this.router.navigateByUrl('success')
      //     }
      //   );
    }
    return this.router.navigateByUrl('success');

  }


}
