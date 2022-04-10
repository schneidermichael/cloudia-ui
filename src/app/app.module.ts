import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { AuthorizedModule } from './authorized/authorized.module';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostPasswordComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizedModule,
    UnauthorizedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
