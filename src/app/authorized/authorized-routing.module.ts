import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizedComponent } from "./authorized.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path: 'authorized', component: AuthorizedComponent, children: [
        {
            path: 'home', // child route path
            component: HomeComponent, // child route component that the router renders
          },

    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AuthorizedRoutingModule { }