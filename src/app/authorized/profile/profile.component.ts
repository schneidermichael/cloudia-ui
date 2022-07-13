import {Component} from '@angular/core';
import {ProfileService} from "../../shared/service/profile.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {User} from "../../shared/interface/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user = {} as User;

  constructor(private profileService: ProfileService, private authenticationService:AuthenticationService, private router: Router) {
    this.profileService.getProfile().subscribe((response : any) => {
      this.user.id = response['id'];
      this.user.createdAt = response['created_at'];
      this.user.updatedAt = response['updated_at'];
      this.user.firstName = response['first_name'];
      this.user.lastName = response['last_name'];
      this.user.email = response['email'];
      this.user.password = response['password'];
      this.user.country = response['country_name']
    });


  }

  delete() {
    this.profileService.deleteProfile(this.user.id).subscribe();
    this.authenticationService.logout();
    this.router.navigate(['/help']);
  }
}
