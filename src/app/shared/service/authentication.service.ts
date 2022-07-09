import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../model/user.model';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";


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
    sessionStorage.setItem('access_token', response);
  }

  getToken() {
    return sessionStorage.getItem('access_token');
  }

  getUserId(){
    // @ts-ignore
    let decoded = jwt_decode(this.getToken());
    // @ts-ignore
    return decoded.sub;
  }
  logout() {
    let removeToken = sessionStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

  get isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('access_token');
    return authToken !== null;
  }

  register(_firstName: string, _lastName: string, email: string, password: string, _national: string) {
    const body = new HttpParams()
      .set(`firstName`, _firstName)
      .set(`lastName`, _lastName)
      .set(`eMail`, email)
      .set(`pwd`, password);

    return this.http.post<User>(`${environment.apiBaseUrl}/auth/register`, body, {headers});
  }

  confirm(_token:string){
    return this.http.get<any>(`${environment.apiBaseUrl}/auth/confirm?token=`+_token, {headers});
  }

  lostPassword(_email: string) {

    return;
  }

  resendRegistration(_email: string) {

    return;
  }
}
