import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './unauthorized/login/login.component';
import {LostPasswordComponent} from './unauthorized/lost-password/lost-password.component';
import {RegisterSuccessComponent} from './unauthorized/register-success/register-success.component';
import {RegisterComponent} from './unauthorized/register/register.component';
import {ResendRegistrationComponent} from './unauthorized/resend-registration/resend-registration.component';
import {HomeComponent} from "./authorized/home/home.component";
import {AuthenticationGuard} from "./shared/guard/authentication.guard";
import {ProfileComponent} from "./authorized/profile/profile.component";
import {BusinessComponent} from "./unauthorized/business/business.component";
import {FeaturesComponent} from "./unauthorized/features/features.component";
import {HelpComponent} from "./unauthorized/help/help.component";
import {CompanyComponent} from "./unauthorized/company/company.component";
import {PageNotFoundComponent} from "./unauthorized/page-not-found/page-not-found.component";

const routes: Routes = [

  {path: '', component: BusinessComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'help', component: HelpComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'success', component: RegisterSuccessComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'resend-registration', component: ResendRegistrationComponent},

  //Autorized
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuard]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
