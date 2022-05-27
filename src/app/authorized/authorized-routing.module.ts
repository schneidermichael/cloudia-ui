import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthorizedComponent} from "./authorized.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationGuard} from "../shared/guard/authentication.guard";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: 'authorized', component: AuthorizedComponent, canActivate: [AuthenticationGuard], children: [
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'profile', // child route path
        component: ProfileComponent, // child route component that the router renders
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthorizedRoutingModule {
}
