import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { AuthorizedModule } from './authorized/authorized.module';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResendRegistrationComponent } from './resend-registration/resend-registration.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostPasswordComponent,
    ResendRegistrationComponent,
    RegisterSuccessComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizedModule,
    UnauthorizedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
