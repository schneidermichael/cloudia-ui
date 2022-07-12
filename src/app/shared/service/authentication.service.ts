import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {Country} from "../interface/country";


const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getCountries(){
    return this.http.get<Country[]>(`${environment.apiBaseUrl}/country`);
  }

  login(email: string, password: string) {
    const body = new HttpParams()
      .set(`email`, email)
      .set(`password`, password);

    return this.http.post<any>(`${environment.apiBaseUrl}/authentication/login`, body, {headers});
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

  register(firstName: string, lastName: string, email: string, password: string, national: string) {
    const body = new HttpParams()
      .set(`first_name`, firstName)
      .set(`last_name`, lastName)
      .set(`email`, email)
      .set(`password`, password)
      .set(`country_name`, national);

    return this.http.post<any>(`${environment.apiBaseUrl}/authentication/register`, body, {headers});
  }

  confirm(_token:string){
    return this.http.get<any>(`${environment.apiBaseUrl}/authentication/confirm?token=`+_token, {headers});
  }

  lostPassword(email: string) {
    const body = new HttpParams().set(`email`, email);
    return this.http.post<any>(`${environment.apiBaseUrl}/authentication/reset-password`,body, {headers});
  }

  resendRegistration(_email: string) {

    return;
  }
}
