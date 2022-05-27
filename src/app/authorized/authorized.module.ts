import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizedComponent } from './authorized.component';
import { HomeComponent } from './home/home.component';
import { AuthorizedRoutingModule } from './authorized-routing.module';
import {UnauthorizedModule} from "../unauthorized/unauthorized.module";
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AuthorizedComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    UnauthorizedModule
  ]
})
export class AuthorizedModule { }
