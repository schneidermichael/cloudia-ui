import {Injectable} from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
