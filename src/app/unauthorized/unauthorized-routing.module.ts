import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { CompanyComponent } from './company/company.component';
import { FeaturesComponent } from './features/features.component';
import { HelpComponent } from './help/help.component';
import { UnauthorizedComponent } from './unauthorized.component';

const routes: Routes = [
    {path: '', component: UnauthorizedComponent},
    {path: 'features', component: FeaturesComponent},
    {path: 'business', component: BusinessComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'help', component: HelpComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class UnauthorizedRoutingModule { }