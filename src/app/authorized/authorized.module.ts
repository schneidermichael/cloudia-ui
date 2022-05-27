import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizedComponent } from './authorized.component';
import { HomeComponent } from './home/home.component';
import { AuthorizedRoutingModule } from './authorized-routing.module';
import {UnauthorizedModule} from "../unauthorized/unauthorized.module";
import { ProfileComponent } from './profile/profile.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    AuthorizedComponent,
    HomeComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    UnauthorizedModule,
    AppModule,

  ],

})
export class AuthorizedModule { }
