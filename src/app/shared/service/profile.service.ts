import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

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
}
