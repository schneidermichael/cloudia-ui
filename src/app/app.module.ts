import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './unauthorized/login/login.component';
import {RegisterComponent} from './unauthorized/register/register.component';
import {LostPasswordComponent} from './unauthorized/lost-password/lost-password.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ResendRegistrationComponent} from './unauthorized/resend-registration/resend-registration.component';
import {RegisterSuccessComponent} from './unauthorized/register-success/register-success.component';
import {NavbarComponent} from "./unauthorized/navbar/navbar.component";
import {FooterComponent} from "./unauthorized/footer/footer.component";
import {FeaturesComponent} from "./unauthorized/features/features.component";
import {HelpComponent} from "./unauthorized/help/help.component";
import {HomeComponent} from "./authorized/home/home.component";
import {ProfileComponent} from "./authorized/profile/profile.component";
import {PageNotFoundComponent} from './unauthorized/page-not-found/page-not-found.component';
import {AuthenticationInterceptor} from "./shared/interceptor/authentication.interceptor";
import {AuthenticationService} from "./shared/service/authentication.service";
import {ProfileService} from "./shared/service/profile.service";
import { PostgresqlComponent } from './authorized/postgresql/postgresql.component';
import { HistoryComponent } from './authorized/history/history.component';
import { VirtualMachineComponent } from './authorized/virtual-machine/virtual-machine.component';
import { FreemiumComponent } from './unauthorized/freemium/freemium.component';
import { ComputeEngineComponent } from './unauthorized/compute-engine/compute-engine.component';

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
    FeaturesComponent,
    HelpComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PostgresqlComponent,
    HistoryComponent,
    VirtualMachineComponent,
    FreemiumComponent,
    ComputeEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    ProfileService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
