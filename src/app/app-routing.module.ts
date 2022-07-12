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
import {FeaturesComponent} from "./unauthorized/features/features.component";
import {HelpComponent} from "./unauthorized/help/help.component";
import {PageNotFoundComponent} from "./unauthorized/page-not-found/page-not-found.component";
import {HistoryComponent} from "./authorized/history/history.component";
import {PostgresqlComponent} from "./authorized/postgresql/postgresql.component";
import {FreemiumComponent} from "./unauthorized/freemium/freemium.component";
import {ChartComponent} from "./authorized/chart/chart.component";
import {LostPasswordSuccessComponent} from "./unauthorized/lost-password-success/lost-password-success.component";

const routes: Routes = [

  {path: '', title: 'Features', component: FeaturesComponent},
  {path: 'help', title: 'Help', component: HelpComponent},
  {path: 'freemium', title: 'Freemium', component: FreemiumComponent},
  {path: 'login', title: 'Login', component: LoginComponent},
  {path: 'register', title: 'Register',component: RegisterComponent},
  {path: 'success', component: RegisterSuccessComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: 'lost-password-success/:id', component: LostPasswordSuccessComponent},
  {path: 'resend-registration', component: ResendRegistrationComponent},


  //Autorized
  {
    path: 'home',
    title: 'Compare Virtual Machines',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'postgresql',
    title: 'Compare PostgreSQL Databases',
    component: PostgresqlComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'history',
    title: 'History',
    component: HistoryComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'chart/:id',
    title: 'Chart',
    component: ChartComponent,
    canActivate: [AuthenticationGuard]
  },
  {path: '**', title: 'Page not found',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
