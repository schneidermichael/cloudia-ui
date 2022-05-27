import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './unauthorized/login/login.component';
import { RegisterComponent } from './unauthorized/register/register.component';
import { LostPasswordComponent } from './unauthorized/lost-password/lost-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResendRegistrationComponent } from './unauthorized/resend-registration/resend-registration.component';
import { RegisterSuccessComponent } from './unauthorized/register-success/register-success.component';
import {NavbarComponent} from "./unauthorized/navbar/navbar.component";
import {FooterComponent} from "./unauthorized/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostPasswordComponent,
    ResendRegistrationComponent,
    RegisterSuccessComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
