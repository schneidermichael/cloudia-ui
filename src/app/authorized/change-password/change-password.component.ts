import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../shared/service/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {

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
      this.service.changePassword(formValue.oldPassword, formValue.newPassword)
        .subscribe(() => this.router.navigateByUrl('profile'));
    }
  }

  get oldPassword() { return this.changePasswordForm.get('oldPassword') as FormControl; }
  get newPassword() { return this.changePasswordForm.get('newPassword') as FormControl; }

}
