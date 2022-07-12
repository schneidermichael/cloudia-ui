import {Component} from '@angular/core';
import {AuthenticationService} from "../../shared/service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  language : boolean = true;

  constructor(public authenticationService: AuthenticationService, private router: Router) {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

  changeToGerman() {
    this.language = false;
    this.router.navigateByUrl('/at/')
  }

  changeToEnglish(){
    this.language = true;
    this.router.navigateByUrl('/')
  }
}
