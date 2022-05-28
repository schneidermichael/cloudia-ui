import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private router: Router) { }

  getProfile() {
    return this.http.get<User>(`${environment.apiBaseUrl}/users/profil`);
  }

  deleteProfile(id: number | undefined){
    return this.http.delete(`${environment.apiBaseUrl}/users/profil/${id}`);
  }
}
