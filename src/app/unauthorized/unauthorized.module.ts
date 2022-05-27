import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { BusinessComponent } from './business/business.component';
import { CompanyComponent } from './company/company.component';
import { HelpComponent } from './help/help.component';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    UnauthorizedComponent,
    FeaturesComponent,
    BusinessComponent,
    CompanyComponent,
    HelpComponent,
  ],

  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    AppModule,
  ]
})
export class UnauthorizedModule { }
