import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = new HttpParams()
    .set(`eMail`, email)
    .set(`pwd`, password);
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    console.log('Email: '+ email);
    console.log('Password: '+ password);
    return this.http.post<User>(`${environment.apiBaseUrl}/auth/signin`, body, {headers});
  }
}
