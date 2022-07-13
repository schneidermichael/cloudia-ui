import {Component} from '@angular/core';
import {ProfileService} from "../../shared/service/profile.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {User} from "../../shared/interface/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  profileForm: FormGroup;

  user = {} as User;

  oldFirstName : string | undefined;
  oldLastName : string | undefined;
  oldEmail : string | undefined;

  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private authenticationService:AuthenticationService,
              private router: Router) {
    this.profileService.getProfile().subscribe((response : any) => {
      this.user.id = response['id'];
      this.user.createdAt = response['created_at'];
      this.user.updatedAt = response['updated_at'];
      this.user.firstName = response['first_name'];
      this.user.lastName = response['last_name'];
      this.user.email = response['email'];
      this.user.password = response['password'];
      this.user.country = response['country_name']

      this.oldFirstName = this.user.firstName;
      this.oldLastName = this.user.lastName;
      this.oldEmail = this.user.email;
    });

    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
  }

  delete() {
    this.profileService.deleteProfile(this.user.id).subscribe();
    this.authenticationService.logout();
    this.router.navigate(['/help']);
  }

  update() {
    const formValue = this.profileForm.value;

    if (this.profileForm.status == "VALID") {
      this.profileService.updateProfile(this.user.id, formValue.firstName, formValue.lastName, formValue.email)
        .subscribe( (response: any) => {
          console.log(response);
          window.location.reload();
        });
    }
  }

  get firstName() { return this.profileForm.get('firstName') as FormControl; }
  get lastName() { return this.profileForm.get('lastName') as FormControl; }
  get email() { return this.profileForm.get('email') as FormControl; }


}
