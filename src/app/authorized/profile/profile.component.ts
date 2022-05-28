import {Component} from '@angular/core';
import {ProfileService} from "../../shared/service/profile.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/service/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  id: number | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  title: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";

  constructor(private profileService: ProfileService, private authenticationService:AuthenticationService, private router: Router) {
    this.profileService.getProfile().subscribe((response : any) => {

      //TODO Map to object if correct implemented in backend
      this.id = response['id'];
      this.createdAt = response['createdAt'];
      this.updatedAt = response['updatedAt'];
      this.title = response['title'];
      this.firstName = response['firstName'];
      this.lastName = response['lastName'];
      this.email = response["eMail"];
      this.password = response['password'];
    });
  }

  delete() {
    this.profileService.deleteProfile(this.id).subscribe();
    this.authenticationService.logout();
    this.router.navigate(['/help']);
  }
}
