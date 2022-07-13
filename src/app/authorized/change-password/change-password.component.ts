import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../shared/service/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {

  showError = false;

  changePasswordForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private service: ProfileService, private router: Router) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });

  }

  changePassword() {
    const formValue = this.changePasswordForm.value;

    if (this.changePasswordForm.status == "VALID") {
      this.service.changePassword(formValue.oldPassword, formValue.newPassword).subscribe({
        next: (value) => {
          this.showError = false;
          this.router.navigateByUrl('profile');
        },
        error: (e) => {
          if (e.error.statusCode === 403){
            this.showError = true;
          }
          console.error(e);
        },
        complete: () => console.info('Change Password complete')
      });
    }

  }

  get oldPassword() { return this.changePasswordForm.get('oldPassword') as FormControl; }
  get newPassword() { return this.changePasswordForm.get('newPassword') as FormControl; }

}
