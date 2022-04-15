import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = new HttpParams()
    .set(`eMail`, email)
    .set(`pwd`, password);

    return this.http.post<User>(`${environment.apiBaseUrl}/auth/signin`, body, {headers});
  }

  register(firstName : string, lastName : string, email : string, password : string, national : string) {
    const body = new HttpParams()
    .set(`eMail`, email)
    .set(`pwd`, password);

    return this.http.post<User>(`${environment.apiBaseUrl}/auth/register`, body, {headers});
  }

  lostPassword(email : string){

    //TODO im Backend noch nicht implementiert
    return ;
  }

  resendRegistration(email : string){

    //TODO im Backend noch nicht implementiert
    return ;
  }


}
