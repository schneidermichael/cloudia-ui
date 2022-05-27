import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../model/user.model';
import {Router} from "@angular/router";

const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    const body = new HttpParams()
      .set(`eMail`, email)
      .set(`pwd`, password);

    return this.http.post<any>(`${environment.apiBaseUrl}/auth/signin`, body, {headers});

  }

  setToken(response: any) {
    localStorage.setItem('access_token', response);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }

  register(_firstName: string, _lastName: string, email: string, password: string, _national: string) {
    const body = new HttpParams()
      .set(`eMail`, email)
      .set(`pwd`, password);

    return this.http.post<User>(`${environment.apiBaseUrl}/auth/register`, body, {headers});
  }

  lostPassword(_email: string) {

    //TODO im Backend noch nicht implementiert
    return;
  }

  resendRegistration(_email: string) {

    //TODO im Backend noch nicht implementiert
    return;
  }


}
