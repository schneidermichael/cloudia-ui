import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = this.authenticationService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + token
      }
    });
    return next.handle(request);
  }
}
