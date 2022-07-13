import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../shared/service/authentication.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html'
})
export class LostPasswordComponent {

  showError = false;

  formLostPassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {

    this.formLostPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    });

  }

  lostPassword() {
    if (this.formLostPassword.status == "VALID") {
      this.authenticationService.lostPassword(this.formLostPassword.value.email).subscribe({
        next: (value) => {
          this.showError = false;
          this.router.navigate(['/lost-password-success', value.password]);
        },
        error: (e) => {
          if (e.error.statusCode === 403){
            this.showError = true;
          }
          console.error(e);
        },
        complete: () => console.info('Lost password complete')
      });
    }


  }

  get email() {
    return this.formLostPassword.get('email') as FormControl;
  }


}
