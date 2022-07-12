import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from 'src/app/shared/service/authentication.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html'
})
export class RegisterSuccessComponent implements OnInit {

  token: string | undefined | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.error(this.token);
      if (this.token != undefined) {
        this.authenticationService.confirm(this.token)
          .subscribe(confirmation => {
            console.error(confirmation.status);
            if (confirmation.status == "isActivated") {
              this.router.navigateByUrl('login')
            }
          })

      }
    })
  }
}
