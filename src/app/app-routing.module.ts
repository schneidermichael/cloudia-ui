import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { ResendRegistrationComponent } from './resend-registration/resend-registration.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'success',component: RegisterSuccessComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'resend-registration', component: ResendRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
