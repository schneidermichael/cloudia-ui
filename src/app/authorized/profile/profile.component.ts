import {Component} from '@angular/core';
import {ProfileService} from "../../shared/service/profile.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {User} from "../../shared/model/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user = {} as User;

  constructor(private profileService: ProfileService, private authenticationService:AuthenticationService, private router: Router) {
    this.profileService.getProfile().subscribe((response : any) => {

      this.user.id = response['id'];
      this.user.createdAt = response['id'];
      this.user.updatedAt = response['updatedAt'];
      this.user.title = response['title'];
      this.user.firstName = response['firstName'];
      this.user.lastName = response['lastName'];
      this.user.email = response['eMail'];
      this.user.password = response['password'];
    });
  }

  delete() {
    this.profileService.deleteProfile(this.user.id).subscribe();
    this.authenticationService.logout();
    this.router.navigate(['/help']);
  }
}
