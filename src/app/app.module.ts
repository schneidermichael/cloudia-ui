import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './unauthorized/login/login.component';
import {RegisterComponent} from './unauthorized/register/register.component';
import {LostPasswordComponent} from './unauthorized/lost-password/lost-password.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ResendRegistrationComponent} from './unauthorized/resend-registration/resend-registration.component';
import {RegisterSuccessComponent} from './unauthorized/register-success/register-success.component';
import {NavbarComponent} from "./unauthorized/navbar/navbar.component";
import {FooterComponent} from "./unauthorized/footer/footer.component";
import {FeaturesComponent} from "./unauthorized/features/features.component";
import {HelpComponent} from "./unauthorized/help/help.component";
import {HomeComponent} from "./authorized/home/home.component";
import {ProfileComponent} from "./authorized/profile/profile.component";
import {PageNotFoundComponent} from './unauthorized/page-not-found/page-not-found.component';
import {AuthenticationInterceptor} from "./shared/interceptor/authentication.interceptor";
import {AuthenticationService} from "./shared/service/authentication.service";
import {ProfileService} from "./shared/service/profile.service";
import { PostgresqlComponent } from './authorized/postgresql/postgresql.component';
import { HistoryComponent } from './authorized/history/history.component';
import { FreemiumComponent } from './unauthorized/freemium/freemium.component';
import { AwsElasticComputingCloudComponent } from './child-component/aws-elastic-computing-cloud/aws-elastic-computing-cloud.component';
import { AzureVirtualMachineComponent } from './child-component/azure-virtual-machine/azure-virtual-machine.component';
import { GcpCloudSqlComponent } from './child-component/gcp-cloud-sql/gcp-cloud-sql.component';
import { AzurePostgresqlComponent } from './child-component/azure-postgresql/azure-postgresql.component';
import { AwsRelationalDatabaseComponent } from './child-component/aws-relational-database/aws-relational-database.component';
import {GcpComputeEngineComponent} from "./child-component/gcp-compute-engine/gcp-compute-engine.component";
import { AzureVirtualMachineCalculateComponent } from './child-component/azure-virtual-machine-calculate/azure-virtual-machine-calculate.component';
import { GcpComputeEngineCalculateComponent } from './child-component/gcp-compute-engine-calculate/gcp-compute-engine-calculate.component';
import { AwsElasticComputingCloudCalculateComponent } from './child-component/aws-elastic-computing-cloud-calculate/aws-elastic-computing-cloud-calculate.component';
import { AwsRelationalDatabaseCalculateComponent } from './child-component/aws-relational-database-calculate/aws-relational-database-calculate.component';
import { GcpCloudSqlCalculateComponent } from './child-component/gcp-cloud-sql-calculate/gcp-cloud-sql-calculate.component';
import { AzurePostgresqlCalculateComponent } from './child-component/azure-postgresql-calculate/azure-postgresql-calculate.component';
import { ChartComponent } from './authorized/chart/chart.component';
import {NgChartsModule} from "ng2-charts";
import { LostPasswordSuccessComponent } from './unauthorized/lost-password-success/lost-password-success.component';
import { ChangePasswordComponent } from './authorized/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostPasswordComponent,
    ResendRegistrationComponent,
    RegisterSuccessComponent,
    NavbarComponent,
    FooterComponent,
    FeaturesComponent,
    HelpComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PostgresqlComponent,
    HistoryComponent,
    FreemiumComponent,
    GcpComputeEngineComponent,
    AwsElasticComputingCloudComponent,
    AzureVirtualMachineComponent,
    GcpCloudSqlComponent,
    AzurePostgresqlComponent,
    AwsRelationalDatabaseComponent,
    AzureVirtualMachineCalculateComponent,
    GcpComputeEngineCalculateComponent,
    AwsElasticComputingCloudCalculateComponent,
    AwsRelationalDatabaseCalculateComponent,
    GcpCloudSqlCalculateComponent,
    AzurePostgresqlCalculateComponent,
    ChartComponent,
    LostPasswordSuccessComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [
    AuthenticationService,
    ProfileService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
