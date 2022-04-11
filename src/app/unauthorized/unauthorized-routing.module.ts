import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CompanyComponent } from './company/company.component';
import { FeaturesComponent } from './features/features.component';
import { HelpComponent } from './help/help.component';
import { UnauthorizedComponent } from './unauthorized.component';

const routes: Routes = [
    {path: '', component: UnauthorizedComponent, children: [
        {
            path: 'features', // child route path
            component: FeaturesComponent, // child route component that the router renders
          },
          {
            path: 'business',
            component: BusinessComponent, // another child route component that the router renders
          },
          {
            path: 'company', // child route path
            component: CompanyComponent, // child route component that the router renders
          },
          {
            path: 'help',
            component: HelpComponent, // another child route component that the router renders
          },
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class UnauthorizedRoutingModule { }