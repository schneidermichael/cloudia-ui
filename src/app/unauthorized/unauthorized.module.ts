import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { BusinessComponent } from './business/business.component';
import { CompanyComponent } from './company/company.component';
import { HelpComponent } from './help/help.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';



@NgModule({
  declarations: [
    UnauthorizedComponent,
    FeaturesComponent,
    BusinessComponent,
    CompanyComponent,
    HelpComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule
  ]
})
export class UnauthorizedModule { }
