import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(`${environment.apiBaseUrl}/user/profile`);
  }

  deleteProfile(id: number | undefined){
    return this.http.delete(`${environment.apiBaseUrl}/user/profile/${id}`);
  }

  changePassword(oldPassword: string, newPassword: string){
    const body = new HttpParams()
      .set(`oldPassword`, oldPassword)
      .set(`newPassword`, newPassword);

    return this.http.put(`${environment.apiBaseUrl}/user/change-password`,body);
  }

  updateProfile(id: number, firstName: string, lastName: string, email: string) {
    console.log(firstName);
    const body = new HttpParams()
      .set(`first_name`, firstName)
      .set(`last_name`, lastName)
      .set(`email`, email);
    return this.http.put(`${environment.apiBaseUrl}/user/profile/${id}`,body);

  }
}
